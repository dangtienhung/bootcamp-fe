import { BodySendMessage, Message } from '@/types/message.type'
import { Socket, io } from 'socket.io-client'
import { useEffect, useRef, useState } from 'react'

import Content from './components/content'
import Sidebar from './components/sidebar'
import { getAllMessagers } from '@/apis/message.api'
import { useAuth } from '@/contexts/auth-context'
import { useQuery } from '@tanstack/react-query'
import { useQueryParams } from '@/hooks/useQueryParams'

const Messagers = () => {
  const { roomId } = useQueryParams()
  const { accessToken } = useAuth()
  const socketRef = useRef<Socket | null>(null)
  // const socket = io('http://localhost:8080')

  const [messagers, setMessagers] = useState<Message[]>([])

  // get all messagers
  const { data: dataMessagers } = useQuery({
    queryKey: ['messagers'],
    queryFn: () => getAllMessagers(roomId, accessToken),
    enabled: !!roomId
  })

  // Tạo kết nối socket chỉ một lần
  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io('http://localhost:8080')
    }

    // Dọn dẹp kết nối socket khi component bị hủy
    return () => {
      socketRef.current?.disconnect()
      socketRef.current = null
    }
  }, [])

  useEffect(() => {
    if (dataMessagers) {
      setMessagers(dataMessagers?.docs)
    }
  }, [dataMessagers])

  // Tham gia phòng khi roomId thay đổi
  useEffect(() => {
    if (roomId && socketRef.current) {
      socketRef.current.emit('join-room', roomId)
    }
  }, [roomId])

  // tạo 1 hàm join room
  // const handleJoinRoom = (roomId: string) => {
  //   socketRef?.current.emit('join-room', roomId)
  // }

  // Hàm gửi tin nhắn
  const handleSendMessage = (data: BodySendMessage) => {
    socketRef.current?.emit('send-message', data)
  }

  // Hàm nhận tin nhắn
  useEffect(() => {
    if (socketRef.current) {
      socketRef.current.on('received-message', (data: Message) => {
        setMessagers((prev) => [...prev, data])
      })
    }

    // Dọn dẹp event listener khi component bị hủy
    return () => {
      socketRef.current?.off('received-message')
    }
  }, [])

  return (
    <div className='grid h-full grid-cols-4'>
      <Sidebar />

      <Content onSendMessage={handleSendMessage} messagers={messagers} />
    </div>
  )
}

export default Messagers
