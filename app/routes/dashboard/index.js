import Controller from './Controller';
import { bind, expr } from 'cx/ui';
import { MonacoEditor } from '../../components/monaco';

export default () => (
   <cx>
      <div class="bg-gray-50 overflow-auto" controller={Controller}>
         <MonacoEditor value={bind('code')} label="Monaco Label" lang="html" className="h-40 mx-20" />
      </div>
   </cx>
);
