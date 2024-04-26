import { ContentResolver, createFunctionalComponent } from 'cx/ui';
import { Icon } from 'cx/widgets';

export const MonacoEditor = createFunctionalComponent((props) => {
   return (
      <cx>
         <ContentResolver
            onResolve={() =>
               import(/* webpackChunkName: "monaco-editor" */ './MonacoEditor').then((m) => new m.MonacoEditor(props))
            }
         >
            {/* centered div with loading spinner */}
            <div
               style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
               }}
            >
               <Icon name="loading" />
               <div text="Loading Monaco Editor..." />
            </div>
         </ContentResolver>
      </cx>
   );
});
