import { HTTP_STATUS } from '../common/http-status.common.js';
import Message from '../models/message.model.js';

export const messageApi = {
  // get all messsage by room id
  getAllMessageByRoomId: async (req, res) => {
    const { search, _limit, _page, roomId } = req.params;

    // Điều kiện lọc theo roomId
    const query = { room: roomId };

    // Thêm điều kiện tìm kiếm nếu có
    if (search) {
      query.content = { $regex: search, $options: 'i' }; // Tìm kiếm theo nội dung tin nhắn
    }

    const options = {
      limit: Number(_limit) || 1000,
      page: Number(_page),
      // sort: { createdAt: -1 }, // Nếu cần sắp xếp theo thời gian
      populate: [
        { path: 'room', select: '_id name createdAt updatedAt' },
        { path: 'sender', select: 'email _id' },
      ],
    };

    try {
      // Sử dụng query để tìm các tin nhắn theo roomId
      const messagers = await Message.paginate(query, options);

      if (!messagers) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: 'Get all messagers failed', success: false });
      }
      return res
        .status(HTTP_STATUS.OK)
        .json({ message: 'Get all messagers successfully', success: true, ...messagers });
    } catch (error) {
      return res
        .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
        .json({ message: 'Error retrieving messages', success: false, error });
    }
  },

  // create messager
  createMesasger: async (req, res) => {
    const body = req.body;

    const newMessage = await Message.create(body);

    if (!newMessage) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: 'Send messager failed', success: false });
    }
    return res.status(HTTP_STATUS.OK).json({ message: 'Send messager successfully', success: true, data: newMessage });
  },
};
