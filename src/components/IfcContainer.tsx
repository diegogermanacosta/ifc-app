/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/react-in-jsx-scope */
import { useRef, useState, useLayoutEffect, useEffect, type KeyboardEvent } from 'react'
import { IfcViewerAPI } from 'web-ifc-viewer'
import { Color } from 'three'

const IfcContainer = (): JSX.Element => {
  const ifcContainer = useRef<HTMLDivElement>(null)
  const [initialViewer, setInitialViewer] = useState<IfcViewerAPI | null>(null)
  const [viewer, setViewer] = useState<IfcViewerAPI | null>(null)

  const loadIfc = async (container: HTMLDivElement): Promise<IfcViewerAPI> => {
    const ifcViewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) })
    ifcViewer.axes.setAxes()
    ifcViewer.grid.setGrid()
    await ifcViewer.IFC.loader.ifcManager.applyWebIfcConfig({
      COORDINATE_TO_ORIGIN: true,
      USE_FAST_BOOLS: false
    })
    return ifcViewer
  }

  const loadModel = async (viewer: IfcViewerAPI, url: string): Promise<void> => {
    await viewer.IFC.setWasmPath('./')
    const model = await viewer.IFC.loadIfcUrl(url)
    viewer.shadowDropper.renderShadow(model.modelID)
    viewer.clipper.active = true
    setInitialViewer(null)
  }

  const ifcCleanup = async (ifcViewer: IfcViewerAPI): Promise<void> => {
    await ifcViewer.dispose()
  }

  const handleOnDoubleClick = (): void => {
    if (viewer == null) return
    viewer.IFC.selector.pickIfcItem(true)
  }

  const handleMouseMove = (): void => {
    if (viewer == null) return
    viewer.IFC.selector.prePickIfcItem()
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (viewer == null) return
    if (event.code === 'KeyP') {
      viewer.clipper.createPlane()
    }
    if (event.code === 'KeyO') {
      viewer.clipper.deletePlane()
    }
  }

  useLayoutEffect(() => {
    let ifcViewer: IfcViewerAPI

    const initialize = async (ifcContainer: HTMLDivElement): Promise<void> => {
      ifcViewer = await loadIfc(ifcContainer)
      setInitialViewer(ifcViewer)
      setViewer(ifcViewer)
    }

    if (ifcContainer.current != null) {
      initialize(ifcContainer.current)
    }

    return () => {
      if (ifcViewer != null) {
        ifcCleanup(ifcViewer)
      }
    }
  }, [])

  useEffect(() => {
    if (initialViewer != null) {
      const params = new URL(document.location.href).searchParams
      const urlFile = params.get('url')
      if (urlFile == null) return
      loadModel(initialViewer, urlFile)
    }
  }, [initialViewer])

  return (
    <div className={'ifcContainer'}
      ref={ifcContainer}
      tabIndex={0}
      onDoubleClick={handleOnDoubleClick}
      onMouseMove={handleMouseMove}
      onKeyDown={event => { handleKeyDown(event) }}
    >
    </div>
  )
}

export default IfcContainer
