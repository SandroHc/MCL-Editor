import { messages } from '@/wip/lang'

export default function __(key) {
	return messages[key] || ('{{' + key + '}}');
}
