import {
  Worker,
  Viewer,
  SpecialZoomLevel,
  Icon,
  MinimalButton,
  Tooltip,
  Plugin,
  RenderViewer,
  Position, // Import Position enum
} from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import {
  pageNavigationPlugin,
  RenderGoToPageProps,
} from "@react-pdf-viewer/page-navigation";

const disableScrollPlugin = (): Plugin => {
  const renderViewer = (props: RenderViewer) => {
    const { slot } = props;

    if (slot.subSlot && slot.subSlot.attrs && slot.subSlot.attrs.style) {
      slot.subSlot.attrs.style = Object.assign({}, slot.subSlot.attrs.style, {
        // Disable scrolling in the pages container
        overflow: "hidden",
      });
    }

    return slot;
  };

  return {
    renderViewer,
  };
};

interface PDFViewerProps {
  fileUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const disableScrollPluginInstance = disableScrollPlugin();
  const { GoToPreviousPage, GoToNextPage } = pageNavigationPluginInstance;

  return (
    <div className="pdf-viewer-container relative w-full h-full bg-white rounded-lg shadow-xl overflow-hidden">
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <Viewer
          fileUrl={fileUrl}
          plugins={[disableScrollPluginInstance, pageNavigationPluginInstance]}
          defaultScale={SpecialZoomLevel.PageFit}
        />

        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <GoToPreviousPage>
            {(props: RenderGoToPageProps) => (
              <Tooltip
                position={Position.BottomCenter} // Use Position.BottomCenter enum
                target={
                  <MinimalButton onClick={props.onClick}>
                    <Icon size={16}>
                      <path d="M18.4.5,5.825,11.626a.5.5,0,0,0,0,.748L18.4,23.5" />
                    </Icon>
                  </MinimalButton>
                }
                content={() => ""}
                offset={{ left: 0, top: 8 }}
              />
            )}
          </GoToPreviousPage>
        </div>

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <GoToNextPage>
            {(props: RenderGoToPageProps) => (
              <Tooltip
                position={Position.BottomCenter} // Use Position.BottomCenter enum
                target={
                  <MinimalButton onClick={props.onClick}>
                    <Icon size={16}>
                      <path d="M5.6,23.5l12.574-11.375a.5.5,0,0,0,0-.748L5.6.5" />
                    </Icon>
                  </MinimalButton>
                }
                content={() => ""}
                offset={{ left: 0, top: 8 }}
              />
            )}
          </GoToNextPage>
        </div>
      </Worker>
    </div>
  );
};

export default PDFViewer;
