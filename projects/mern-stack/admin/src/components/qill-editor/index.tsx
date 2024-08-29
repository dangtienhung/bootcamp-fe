import ReactQuill from 'react-quill'

interface IQuillEditorProps {
  value: string
  onChange: (value: string) => void
}

const QuillEditor = ({ value, onChange }: IQuillEditorProps) => {
  return <ReactQuill theme='snow' value={value} onChange={onChange} />
}

export default QuillEditor
