/*global kakao */
import { useRef, useEffect } from 'react';
import styled from 'styled-components';

const HospitalMap = ({ x, y }) => {
  const { kakao } = window;
  const container = useRef(null);
  const options = {
    center: new kakao.maps.LatLng(y, x),
    draggable: true,
    level: 2,
  };

  const marker = new kakao.maps.Marker({
    position: new kakao.maps.LatLng(y, x),
  });

  const zoomControl = new kakao.maps.ZoomControl();

  useEffect(() => {
    const map = new kakao.maps.Map(container.current, options);

    marker.setMap(map);
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  }, []);

  return (
    <MapWrapper>
      <Map id='map' ref={container} />
    </MapWrapper>
  );
};

export default HospitalMap;

const MapWrapper = styled.div`
  width: 100%;
  height: 80%;
`;

const Map = styled.div`
  width: 100%;
  height: 100%;
`;
