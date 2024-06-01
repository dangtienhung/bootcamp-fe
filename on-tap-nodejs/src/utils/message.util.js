export const messageResponse = ({
	res,
	status = 200,
	message = 'Success',
	success = false,
	data = null,
}) => {
	res.status(status).json({
		message,
		success,
		data,
	});
};
