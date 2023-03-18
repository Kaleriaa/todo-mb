export const generateId = () => {
    const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    return Array.from(
        { length: 8 },
        () => characters[Math.floor(Math.random() * characters.length)],
    ).join('')
}
