export function generateUniqueId() {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base36
  const randomString = Math.random().toString(36).substr(2, 5); // Generate a random string

  return `${timestamp}-${randomString}`;
}
