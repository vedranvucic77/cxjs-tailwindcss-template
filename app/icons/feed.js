import { Icon } from 'cx/widgets';
import { VDOM } from 'cx/ui';

Icon.register('feed', (props) => (
   <svg {...props} viewBox="0 0 24 24">
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         stroke="currentColor"
         fill="none"
         d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
      />
   </svg>
));
