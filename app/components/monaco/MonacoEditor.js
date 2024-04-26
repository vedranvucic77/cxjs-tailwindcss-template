import { VDOM } from 'cx/ui';
import { Field, Widget } from 'cx/widgets';
import { editor } from 'monaco-editor';

export class MonacoEditor extends Field {
   declareData() {
      return super.declareData(...arguments, {
         code: undefined,
         value: undefined,
         class: { structured: true },
         style: { structured: true },
         lang: undefined,
         required: undefined,
         readOnly: undefined,
      });
   }

   renderInput(context, instance, key) {
      return <Input key={key} instance={instance} data={instance.data} />;
   }

   isEmpty(data) {
      return !data.value || data.value === this.emptyValue;
   }
}

class Input extends VDOM.Component {
   render() {
      let { data, widget, state } = this.props.instance;
      let { CSS } = widget;
      let empty = this.input ? !this.input.value : data.empty;

      return (
         <div
            key={this.props.key}
            className={CSS.expand(
               data.classNames,
               CSS.state({
                  visited: state.visited,
                  empty: empty && !data.placeholder,
                  error: data.error && (state.visited || !empty),
               })
            )}
            ref={(el) => {
               this.codeEditor = el;
            }}
         />
      );
   }

   componentDidMount() {
      const { instance } = this.props;

      editor.defineTheme('custom-theme', {
         inherit: true,
         colors: {
            'editor.background': '#334155',
            'editor.foreground': '#ffffff',
            'editorCursor.foreground': '#ffcc00',
            'editor.lineHighlightBorder': '#334155',
         },
         rules: [
            {
               token: 'editor.background',
               background: '334155',
            },
            {
               token: 'identifier',
               background: 'ffff11',
            },
         ],
      });

      editor.setTheme('custom-theme');

      this.monaco = editor.create(this.codeEditor, {
         value: instance.data.value,
         language: instance.data.lang,
         readOnly: instance.data.readOnly,
      });

      this.monaco.onDidBlurEditorText(() => {
         this.onBlur(this.monaco.getValue());
      });
   }

   componentWillReceiveProps(props) {
      if (props.data.value != this.monaco.getValue()) this.monaco.setValue(props.data.value || '');
   }

   onBlur(value) {
      let { instance, data } = this.props;
      let { widget } = instance;

      if (data.required) {
         instance.setState({
            empty: !value,
         });
      }

      instance.setState({ visited: true });
      instance.set('value', value || widget.emptyValue);
   }
}

MonacoEditor.prototype.lang = 'javascript';

Widget.alias('codeeditor', MonacoEditor);
