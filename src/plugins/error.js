export const parseAxiosError = (err) => {
    let error = err.message.split(" ");
    return error[error.length - 1]
}
