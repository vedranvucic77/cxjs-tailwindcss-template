import { Icon } from 'cx/widgets';
import { VDOM } from 'cx/ui';

Icon.register('back', (props) => (
   <svg {...props} viewBox="0 0 20 20">
      <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
         <path d="M3.828 9l6.071-6.071-1.414-1.414L0 10l.707.707 7.778 7.778 1.414-1.414L3.828 11H20V9H3.828z" />
      </g>
   </svg>
));
