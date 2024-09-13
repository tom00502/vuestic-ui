import { VNode } from 'vue'

export type ToastPosition =
  'top-right'
  | 'top-center'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center'

export interface ToastOptions {
  /** Title */
  title?: string;

  /** Description text */
  message: string | VNode;

  /** Custom icon's class. It will be overridden by type */
  iconClass?: string;

  /** Custom class name for Notification */
  customClass?: string;

  /** Duration before close. It will not automatically close if set 0 */
  duration?: number;

  /** Whether to show a close button */
  closeable?: boolean;

  /** Whether message is treated as HTML string */
  dangerouslyUseHtmlString?: boolean;

  /** Render function */
  render?: () => VNode;

  /** Callback function when closed */
  onClose?: () => void;

  /** Callback function when notification clicked */
  onClick?: () => void;

  /** Offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset */
  offsetX?: number;

  /** custom position */
  position?: ToastPosition;

  offsetY?: number;

  visible?: boolean;

  color?: string;
}
