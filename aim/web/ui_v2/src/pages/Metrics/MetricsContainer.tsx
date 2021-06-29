import React from 'react';
import Metrics from './Metrics';

function MetricsContainer(): React.FunctionComponentElement<React.ReactNode> {
  const tableRef = React.useRef<HTMLDivElement>(null);
  const chartRef = React.useRef<HTMLDivElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', startResize);
      document.removeEventListener('mouseup', endResize);
    };
  }, []);

  const handleResize = React.useCallback(() => {
    document.addEventListener('mousemove', startResize);
    document.addEventListener('mouseup', endResize);
  }, []);

  const startResize = React.useCallback((event: MouseEvent): void => {
    const containerHeight: number =
      (tableRef.current as HTMLDivElement)?.getBoundingClientRect()?.height +
      (chartRef.current as HTMLDivElement)?.getBoundingClientRect()?.height;
    const searchBarHeight: number =
      (wrapperRef.current as HTMLDivElement)?.getBoundingClientRect()?.height -
      containerHeight;
    const height: number = event.clientY - searchBarHeight;
    const flex: number = height / containerHeight;
    window.requestAnimationFrame(() => {
      (chartRef.current as HTMLDivElement).style.flex = `${flex} 1 0` || '';
      (tableRef.current as HTMLDivElement).style.flex = `${1 - flex} 1 0`;
    });
  }, []);

  const endResize = React.useCallback(() => {
    document.removeEventListener('mousemove', startResize);
  }, []);

  return (
    <Metrics
      handleResize={handleResize}
      tableRef={tableRef}
      chartRef={chartRef}
      wrapperRef={wrapperRef}
    />
  );
}

export default MetricsContainer;
