export interface FileAttached {
  taskId: number,
  fileName: string,
  size: number,
  type: string,
  fileBase64: string,
  sync: Boolean,
  iconClass: string
}