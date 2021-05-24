import { Icon } from 'cx/widgets';
import { VDOM } from 'cx/ui';

Icon.register('user', (props) => (
   <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
   </svg>
));
