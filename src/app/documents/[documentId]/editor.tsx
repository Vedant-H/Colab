// // "use client";

// // import StarterKit from '@tiptap/starter-kit'
// // import TaskItem from '@tiptap/extension-task-item'
// // import TaskList from '@tiptap/extension-task-list'
// // import Table from '@tiptap/extension-table'
// // import Image from '@tiptap/extension-image'
// // import TextAlign from '@tiptap/extension-text-align'
// // import Link from '@tiptap/extension-link'
// // import { Color } from '@tiptap/extension-color'
// // import Highlight from "@tiptap/extension-highlight"
// // import FontFamily from '@tiptap/extension-font-family'
// // import TextStyle from '@tiptap/extension-text-style'
// // import Underline from '@tiptap/extension-underline'
// // import ImageResize from "tiptap-extension-resize-image";
// // import TableCell from '@tiptap/extension-table-cell'
// // import TableHeader from '@tiptap/extension-table-header'
// // import TableRow from '@tiptap/extension-table-row'
// // import { useEditor, EditorContent } from '@tiptap/react'
// // import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
// // import { useStorage } from '@liveblocks/react';

// // import { useEditorStore } from '@/store/use-editor-store';
// // import { FontSizeExtension } from '@/extensions/font-size';
// // import { LineHeightExtension } from '@/extensions/line-height';
// // import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from '@/constants/margins';

// // import { Ruler } from './ruler';
// // import { Threads } from './threads';

// // interface EditorProps {
// //   initialContent?: string | undefined;
// // };

// // export const Editor = ({ initialContent }: EditorProps) => {
// //   const leftMargin = useStorage((root) => root.leftMargin) ?? LEFT_MARGIN_DEFAULT;
// //   const rightMargin = useStorage((root) => root.rightMargin) ?? RIGHT_MARGIN_DEFAULT;
  
// //   const liveblocks = useLiveblocksExtension({
// //     initialContent,
// //     offlineSupport_experimental: true,
// //   });
// //   const { setEditor } = useEditorStore();

// //   const editor = useEditor({
// //     autofocus: true,
// //     immediatelyRender: false,
// //     onCreate({ editor }) {
// //       setEditor(editor);
// //     },
// //     onDestroy() {
// //       setEditor(null);
// //     },
// //     onUpdate({ editor }) {
// //       setEditor(editor)
// //     },
// //     onSelectionUpdate({ editor }) {
// //       setEditor(editor)
// //     },
// //     onTransaction({ editor }) {
// //       setEditor(editor)
// //     },
// //     onFocus({ editor }) {
// //       setEditor(editor)
// //     },
// //     onBlur({ editor }) {
// //       setEditor(editor)
// //     },
// //     onContentError({ editor }) {
// //       setEditor(editor)
// //     },
// //     editorProps: {
// //       attributes: {
// //         style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px;`,
// //         class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
// //       },
// //     },
// //     extensions: [
// //       liveblocks,
// //       StarterKit.configure({
// //         history: false,
// //       }),
// //       LineHeightExtension,
// //       FontSizeExtension,
// //       TextAlign.configure({
// //         types: ["heading", "paragraph"]
// //       }),
// //       Link.configure({
// //         openOnClick: false,
// //         autolink: true,
// //         defaultProtocol: "https"
// //       }),
// //       Color,
// //       Highlight.configure({
// //         multicolor: true,
// //       }),
// //       FontFamily,
// //       TextStyle,
// //       Underline,
// //       Image,
// //       ImageResize,
// //       Table,
// //       TableCell,
// //       TableHeader,
// //       TableRow,
// //       TaskItem.configure({
// //         nested: true,
// //       }),
// //       TaskList,
// //     ],
// //   })

// //   return (
// //     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
// //       <Ruler />
// //       <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
// //         <EditorContent editor={editor} />
// //         <Threads editor={editor} />
// //       </div>
// //     </div>
// //   );
// // };


// "use client";

// import StarterKit from '@tiptap/starter-kit'
// import TaskItem from '@tiptap/extension-task-item'
// import TaskList from '@tiptap/extension-task-list'
// import Table from '@tiptap/extension-table'
// import Image from '@tiptap/extension-image'
// import TextAlign from '@tiptap/extension-text-align'
// import Link from '@tiptap/extension-link'
// import { Color } from '@tiptap/extension-color'
// import Highlight from "@tiptap/extension-highlight"
// import FontFamily from '@tiptap/extension-font-family'
// import TextStyle from '@tiptap/extension-text-style'
// import Underline from '@tiptap/extension-underline'
// import ImageResize from "tiptap-extension-resize-image";
// import TableCell from '@tiptap/extension-table-cell'
// import TableHeader from '@tiptap/extension-table-header'
// import TableRow from '@tiptap/extension-table-row'
// import { useEditor, EditorContent } from '@tiptap/react'
// import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
// import { useStorage } from '@liveblocks/react';

// import { useEditorStore } from '@/store/use-editor-store';
// import { FontSizeExtension } from '@/extensions/font-size';
// import { LineHeightExtension } from '@/extensions/line-height';
// import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from '@/constants/margins';

// import { Ruler } from './ruler';
// import { Threads } from './threads';
// import AICopilot from '@/extensions/AICopilotEditor'; // Import your AICopilot extension

// interface EditorProps {
//   initialContent?: string | undefined;
// };

// export const Editor = ({ initialContent }: EditorProps) => {
//   const leftMargin = useStorage((root) => root.leftMargin) ?? LEFT_MARGIN_DEFAULT;
//   const rightMargin = useStorage((root) => root.rightMargin) ?? RIGHT_MARGIN_DEFAULT;

//   const liveblocks = useLiveblocksExtension({
//     initialContent,
//     offlineSupport_experimental: true,
//   });
//   const { setEditor } = useEditorStore();

//   const editor = useEditor({
//     autofocus: true,
//     immediatelyRender: false,
//     onCreate({ editor }) {
//       setEditor(editor);
//     },
//     onDestroy() {
//       setEditor(null);
//     },
//     onUpdate({ editor }) {
//       setEditor(editor)
//     },
//     onSelectionUpdate({ editor }) {
//       setEditor(editor)
//     },
//     onTransaction({ editor }) {
//       setEditor(editor)
//     },
//     onFocus({ editor }) {
//       setEditor(editor)
//     },
//     onBlur({ editor }) {
//       setEditor(editor)
//     },
//     onContentError({ editor }) {
//       setEditor(editor)
//     },
//     editorProps: {
//       attributes: {
//         style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px;`,
//         class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
//       },
//     },
//     extensions: [
//       liveblocks,
//       StarterKit.configure({
//         history: false,
//       }),
//       LineHeightExtension,
//       FontSizeExtension,
//       TextAlign.configure({
//         types: ["heading", "paragraph"]
//       }),
//       Link.configure({
//         openOnClick: false,
//         autolink: true,
//         defaultProtocol: "https"
//       }),
//       Color,
//       Highlight.configure({
//         multicolor: true,
//       }),
//       FontFamily,
//       TextStyle,
//       Underline,
//       Image,
//       ImageResize,
//       Table,
//       TableCell,
//       TableHeader,
//       TableRow,
//       TaskItem.configure({
//         nested: true,
//       }),
//       TaskList,
//       AICopilot, // Add your AICopilot extension here
//     ],
//   })

//   return (
//     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
//       <Ruler />
//       <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
//         <EditorContent editor={editor} />
//         <Threads editor={editor} />
//       </div>
//     </div>
//   );
// };
// "use client";

// import StarterKit from '@tiptap/starter-kit';
// import TaskItem from '@tiptap/extension-task-item';
// import TaskList from '@tiptap/extension-task-list';
// import Table from '@tiptap/extension-table';
// import Image from '@tiptap/extension-image';
// import TextAlign from '@tiptap/extension-text-align';
// import Link from '@tiptap/extension-link';
// import { Color } from '@tiptap/extension-color';
// import Highlight from "@tiptap/extension-highlight";
// import FontFamily from '@tiptap/extension-font-family';
// import TextStyle from '@tiptap/extension-text-style';
// import Underline from '@tiptap/extension-underline';
// import ImageResize from "tiptap-extension-resize-image";
// import TableCell from '@tiptap/extension-table-cell';
// import TableHeader from '@tiptap/extension-table-header';
// import TableRow from '@tiptap/extension-table-row';
// import { useEditor, EditorContent } from '@tiptap/react';
// import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
// import { useStorage } from '@liveblocks/react';
// import { useMutation } from "convex/react";
// import { toast } from "sonner";
// import { useEffect, useState } from 'react';

// import { useEditorStore } from '@/store/use-editor-store';
// import { FontSizeExtension } from '@/extensions/font-size';
// import { LineHeightExtension } from '@/extensions/line-height';
// import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from '@/constants/margins';
// import { api } from "../../../../convex/_generated/api";
// import { Ruler } from './ruler';
// import { Threads } from './threads';

// interface EditorProps {
//   initialContent?: string | undefined;
//   documentId: string;
// }

// interface Version {
//   _id: any;
//   _creationTime: number;
//   content: string;
//   title: string;
//   documentId: any;
//   createdAt: Date;
// }

// export const Editor = ({ initialContent, documentId }: EditorProps) => {
//   const leftMargin = useStorage((root) => root.leftMargin) ?? LEFT_MARGIN_DEFAULT;
//   const rightMargin = useStorage((root) => root.rightMargin) ?? RIGHT_MARGIN_DEFAULT;

//   const liveblocks = useLiveblocksExtension({
//     initialContent,
//     offlineSupport_experimental: true,
//   });
//   const { setEditor } = useEditorStore();

//   const editor = useEditor({
//     autofocus: true,
//     immediatelyRender: false,
//     onCreate({ editor }) {
//       setEditor(editor);
//     },
//     onDestroy() {
//       setEditor(null);
//     },
//     onUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onSelectionUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onTransaction({ editor }) {
//       setEditor(editor);
//     },
//     onFocus({ editor }) {
//       setEditor(editor);
//     },
//     onBlur({ editor }) {
//       setEditor(editor);
//     },
//     onContentError({ editor }) {
//       setEditor(editor);
//     },
//     editorProps: {
//       attributes: {
//         style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px;`,
//         class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
//       },
//     },
//     extensions: [
//       liveblocks,
//       StarterKit.configure({
//         history: false,
//       }),
//       LineHeightExtension,
//       FontSizeExtension,
//       TextAlign.configure({
//         types: ["heading", "paragraph"]
//       }),
//       Link.configure({
//         openOnClick: false,
//         autolink: true,
//         defaultProtocol: "https"
//       }),
//       Color,
//       Highlight.configure({
//         multicolor: true,
//       }),
//       FontFamily,
//       TextStyle,
//       Underline,
//       Image,
//       ImageResize,
//       Table,
//       TableCell,
//       TableHeader,
//       TableRow,
//       TaskItem.configure({
//         nested: true,
//       }),
//       TaskList,
//     ],
//   });

//   const [versions, setVersions] = useState<Version[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<any>(null);

//   useEffect(() => {
//     if (documentId) {
//       setLoading(true);
//       setError(null);
//       api.documents.getVersions({ id: documentId })
//         .then((data) => {
//           setVersions(data);
//           setLoading(false);
//         })
//         .catch((err) => {
//           setError(err);
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, [documentId]);

//   const restoreVersionMutation = useMutation(api.documents.restoreVersion);

//   const handleRestoreVersion = async (versionId: string) => {
//     try {
//       await restoreVersionMutation({ documentId, versionId });
//       toast.success("Version restored successfully!");

//       const updatedDocument = await api.documents.getById({ id: documentId });
//       if (updatedDocument && editor) {
//         editor.commands.setContent(updatedDocument.content);
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to restore version");
//     }
//   };

//   if (loading) {
//     return <div>Loading versions...</div>;
//   }

//   if (error) {
//     console.error("Error fetching versions:", error);
//     return <div>Error fetching document versions</div>;
//   }

//   return (
//     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
//       <Ruler />
//       <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
//         <EditorContent editor={editor} />
//         <Threads editor={editor} />
//       </div>

//       <div className="versioning-section">
//         <h3>Document Versions</h3>
//         <ul>
//           {
//           versions &&
//           versions.map((version) => (
//             <li key={version._id}>
//               <div>
//                 <strong>{version.title}</strong>
//                 <p>{version.createdAt.toLocaleString()}</p>
//                 <button
//                   onClick={() => handleRestoreVersion(version._id)}
//                   className="restore-button"
//                 >
//                   Restore
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };







// works


// "use client";

// import StarterKit from '@tiptap/starter-kit';
// import TaskItem from '@tiptap/extension-task-item';
// import TaskList from '@tiptap/extension-task-list';
// import Table from '@tiptap/extension-table';
// import Image from '@tiptap/extension-image';
// import TextAlign from '@tiptap/extension-text-align';
// import Link from '@tiptap/extension-link';
// import { Color } from '@tiptap/extension-color';
// import Highlight from "@tiptap/extension-highlight";
// import FontFamily from '@tiptap/extension-font-family';
// import TextStyle from '@tiptap/extension-text-style';
// import Underline from '@tiptap/extension-underline';
// import ImageResize from "tiptap-extension-resize-image";
// import TableCell from '@tiptap/extension-table-cell';
// import TableHeader from '@tiptap/extension-table-header';
// import TableRow from '@tiptap/extension-table-row';
// import { useEditor, EditorContent } from '@tiptap/react';
// import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
// import { useStorage } from '@liveblocks/react';
// import { useMutation } from "convex/react";
// import { toast } from "sonner";
// import { useEffect, useState } from 'react';
// import { ConvexHttpClient } from "convex/browser";
// import { usePathname } from 'next/navigation';

// import { useEditorStore } from '@/store/use-editor-store';
// import { FontSizeExtension } from '@/extensions/font-size';
// import { LineHeightExtension } from '@/extensions/line-height';
// import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from '@/constants/margins';
// import { api } from "../../../../convex/_generated/api";
// import { Ruler } from './ruler';
// import { Threads } from './threads';

// interface EditorProps {
//   initialContent?: string | undefined;
//   documentId?: string;
// }

// interface Version {
//   _id: any;
//   _creationTime: number;
//   content: string;
//   title: string;
//   documentId: any;
//   createdAt: number;
// }

// const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// export const Editor = ({ initialContent, documentId: propDocumentId }: EditorProps) => {
//   const leftMargin = useStorage((root) => root.leftMargin) ?? LEFT_MARGIN_DEFAULT;
//   const rightMargin = useStorage((root) => root.rightMargin) ?? RIGHT_MARGIN_DEFAULT;

//   const liveblocks = useLiveblocksExtension({
//     initialContent,
//     offlineSupport_experimental: true,
//   });
//   const { setEditor } = useEditorStore();
//   const pathname = usePathname();
//   const [documentId, setDocumentId] = useState<string | null>(null);

//   useEffect(() => {
//     if (propDocumentId) {
//       setDocumentId(propDocumentId);
//     } else {
//       const match = pathname.match(/\/documents\/([a-zA-Z0-9]+)/);
//       if (match && match[1]) {
//         setDocumentId(match[1]);
//       } else {
//         setDocumentId(null);
//       }
//     }
//   }, [pathname, propDocumentId]);

//   const editor = useEditor({
//     autofocus: true,
//     immediatelyRender: false,
//     onCreate({ editor }) {
//       setEditor(editor);
//     },
//     onDestroy() {
//       setEditor(null);
//     },
//     onUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onSelectionUpdate({ editor }) {
//       setEditor(editor);
//     },
//     onTransaction({ editor }) {
//       setEditor(editor);
//     },
//     onFocus({ editor }) {
//       setEditor(editor);
//     },
//     onBlur({ editor }) {
//       setEditor(editor);
//     },
//     onContentError({ editor }) {
//       setEditor(editor);
//     },
//     editorProps: {
//       attributes: {
//         style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px;`,
//         class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
//       },
//     },
//     extensions: [
//       liveblocks,
//       StarterKit.configure({
//         history: false,
//       }),
//       LineHeightExtension,
//       FontSizeExtension,
//       TextAlign.configure({
//         types: ["heading", "paragraph"]
//       }),
//       Link.configure({
//         openOnClick: false,
//         autolink: true,
//         defaultProtocol: "https"
//       }),
//       Color,
//       Highlight.configure({
//         multicolor: true,
//       }),
//       FontFamily,
//       TextStyle,
//       Underline,
//       Image,
//       ImageResize,
//       Table,
//       TableCell,
//       TableHeader,
//       TableRow,
//       TaskItem.configure({
//         nested: true,
//       }),
//       TaskList,
//     ],
//   });

//   const [versions, setVersions] = useState<Version[] | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<any>(null);

//   useEffect(() => {
//     setVersions(null);
//     console.log("Editor: useEffect running with documentId:", documentId);
//     if (documentId) {
//       setLoading(true);
//       setError(null);
//       console.log("Document ID:", documentId);
//       convex.query(api.documents.getVersions, { id: documentId })
//         .then((data) => {
//           console.log("Data from Convex:", data);
//           setVersions(data);
//           setLoading(false);
//         })
//         .catch((err) => {
//           console.error("Editor: Error fetching versions:", err);
//           setError(err);
//           setVersions([]);
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, [documentId]);

//   const restoreVersionMutation = useMutation(api.documents.restoreVersion);
//   const updateByIdMutation = useMutation(api.documents.updateById);

//   const handleRestoreVersion = async (versionId: string) => {
//     try {
//         await restoreVersionMutation({ documentId, versionId });
//         toast.success("Version restored successfully!");

//         const updatedDocument = await convex.query(api.documents.getById, { id: documentId });

//         if (updatedDocument && editor) {
//             editor.commands.setContent(updatedDocument.initialContent); // Set HTML
//         }
//     } catch (err) {
//         console.error(err);
//         toast.error("Failed to restore version");
//     }
// };
//   const handleSave = async () => {
//     if (!editor || !documentId) return;

//     const content = editor.getHTML(); // Get HTML content
//     console.log("Editor Content (HTML):", content);

//     try {
//         await updateByIdMutation({
//             id: documentId,
//             title: 
//             content: content, // Store HTML
//         });
//         toast.success("Document saved");
//     } catch (error) {
//         toast.error("Failed to save document");
//         console.error(error);
//     }
// };

//   if (loading) {
//     return <div className="p-4">Loading versions...</div>;
//   }

//   if (error) {
//     return <div className="p-4 text-red-500">Error fetching document versions</div>;
//   }

//   if (!versions) {
//     return <div className="p-4">No versions found.</div>;
//   }

//   return (
//     <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
//       <Ruler />
//       <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
//         <EditorContent editor={editor} />
//         <Threads editor={editor} />
//       </div>
//       <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-1 text-sm">
//     Save
// </button>

//       <div className="mt-6 p-4 border rounded-md shadow-sm">
//         <h3 className="text-lg font-semibold mb-4">Document Versions</h3>
//         <ul className="space-y-2">
//           {versions && versions.map((version) => (
//             <li key={version._id} className="border rounded-md p-3">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <strong className="block">{version.title}</strong>
//                   <p className="text-sm text-gray-500">{new Date(version.createdAt).toLocaleString()}</p>
//                 </div>
//                 <button
//                   onClick={() => handleRestoreVersion(version._id)}
//                   className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-1 text-sm">
//                   Restore
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };


"use client";

import StarterKit from '@tiptap/starter-kit';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Table from '@tiptap/extension-table';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import { Color } from '@tiptap/extension-color';
import Highlight from "@tiptap/extension-highlight";
import FontFamily from '@tiptap/extension-font-family';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import ImageResize from "tiptap-extension-resize-image";
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import { useEditor, EditorContent } from '@tiptap/react';
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { useStorage } from '@liveblocks/react';
import { useMutation, useQuery } from "convex/react";
import { toast } from "sonner";
import { useEffect, useState } from 'react';
import { ConvexHttpClient } from "convex/browser";
import { usePathname } from 'next/navigation';

import { useEditorStore } from '@/store/use-editor-store';
import { FontSizeExtension } from '@/extensions/font-size';
import { LineHeightExtension } from '@/extensions/line-height';
import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from '@/constants/margins';
import { api } from "../../../../convex/_generated/api";
import { Ruler } from './ruler';
import { Threads } from './threads';
import { DocumentInput } from "./document-input"; // Import DocumentInput

interface EditorProps {
  initialContent?: string | undefined;
  documentId?: string;
}

interface Version {
  _id: any;
  _creationTime: number;
  content: string;
  title: string;
  documentId: any;
  createdAt: number;
}

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const Editor = ({ initialContent, documentId: propDocumentId }: EditorProps) => {
  const leftMargin = useStorage((root) => root.leftMargin) ?? LEFT_MARGIN_DEFAULT;
  const rightMargin = useStorage((root) => root.rightMargin) ?? RIGHT_MARGIN_DEFAULT;

  const liveblocks = useLiveblocksExtension({
    initialContent,
    offlineSupport_experimental: true,
  });
  const { setEditor } = useEditorStore();
  const pathname = usePathname();
  const [documentId, setDocumentId] = useState<string | null>(null);

  useEffect(() => {
    if (propDocumentId) {
      setDocumentId(propDocumentId);
    } else {
      const match = pathname.match(/\/documents\/([a-zA-Z0-9]+)/);
      if (match && match[1]) {
        setDocumentId(match[1]);
      } else {
        setDocumentId(null);
      }
    }
  }, [pathname, propDocumentId]);

  const editor = useEditor({
    autofocus: true,
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px;`,
        class: "focus:outline-none print:border-0 bg-white border border-[#C7C7C7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text"
      },
    },
    extensions: [
      liveblocks,
      StarterKit.configure({
        history: false,
      }),
      LineHeightExtension,
      FontSizeExtension,
      TextAlign.configure({
        types: ["heading", "paragraph"]
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https"
      }),
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      FontFamily,
      TextStyle,
      Underline,
      Image,
      ImageResize,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      TaskItem.configure({
        nested: true,
      }),
      TaskList,
    ],
  });

  const [versions, setVersions] = useState<Version[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setVersions(null);
    console.log("Editor: useEffect running with documentId:", documentId);
    if (documentId) {
      setLoading(true);
      setError(null);
      console.log("Document ID:", documentId);
      convex.query(api.documents.getVersions, { id: documentId })
        .then((data) => {
          console.log("Data from Convex:", data);
          setVersions(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Editor: Error fetching versions:", err);
          setError(err);
          setVersions([]);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [documentId]);

  const restoreVersionMutation = useMutation(api.documents.restoreVersion);
  const updateByIdMutation = useMutation(api.documents.updateById);
  const document = useQuery(api.documents.getById, { id: documentId });

  const handleRestoreVersion = async (versionId: string) => {
    try {
      await restoreVersionMutation({ documentId, versionId });
      toast.success("Version restored successfully!");

      const updatedDocument = await convex.query(api.documents.getById, { id: documentId });

      if (updatedDocument && editor) {
        editor.commands.setContent(updatedDocument.initialContent);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to restore version");
    }
  };

  const handleSave = async () => {
    if (!editor || !documentId) return;

    const content = editor.getHTML();
    console.log("Editor Content (HTML):", content);

    try {
      await updateByIdMutation({
        id: documentId,
        title: document?.title || "Document",
        content: content,
      });
      toast.success("Document saved");
    } catch (error) {
      toast.error("Failed to save document");
      console.error(error);
    }
  };

  if (loading) {
    return <div className="p-4">Loading versions...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error fetching document versions</div>;
  }

  if (!versions) {
    return <div className="p-4">No versions found.</div>;
  }

  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Ruler />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
        <Threads editor={editor} />
      </div>

      
       <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-1 text-sm">
     Save
 </button>

      <div className="mt-6 p-4 border rounded-md shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Document Versions</h3>
        <ul className="space-y-2">
          {versions && versions.map((version) => (
            <li key={version._id} className="border rounded-md p-3">
              <div className="flex justify-between items-center">
                <div>
                  <strong className="block">{version.title}</strong>
                  <p className="text-sm text-gray-500">{new Date(version.createdAt).toLocaleString()}</p>
                </div>
                <button
                  onClick={() => handleRestoreVersion(version._id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-3 py-1 text-sm"
                >
                  Restore
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};