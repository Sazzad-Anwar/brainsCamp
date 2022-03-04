import React, { useRef, useState, useEffect } from 'react'

const Editor = ({ handleEditorData }) => {
    const editorRef = useRef()
    const [editorLoaded, setEditorLoaded] = useState(false)
    const { CKEditor, ClassicEditor } = editorRef.current || {}

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            ClassicEditor: require('../ckeditor5-build-with-htmlembed-master/build/ckeditor')
        }
        setEditorLoaded(true)
    }, [])

    return (
        <>
            {
                editorLoaded ?
                    <CKEditor className="mt-3 wrap-ckeditor" editor={ClassicEditor}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            handleEditorData(data);
                        }} />
                    :
                    "loading..."
            }
        </>
    )
}

export default Editor