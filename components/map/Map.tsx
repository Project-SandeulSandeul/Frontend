import { initialize } from 'next/dist/server/lib/render-server';
import Script from 'next/script';
import React, { useEffect } from 'react';

const Map = () => {
    // const initializeMap = () => {
    //     const mapOptions = {
    //         center: new window.naver.maps.LatLng(37.3595704, 127.105399),
    //         zoom: 10,
    //     };
    // };
    // const map = new window.naver.maps.Map(mapID, mapOptions);
    // mapRef.current = map;
    // if (onLoad) {
    //     onLoad(map);
    // };
    // useEffect(()=>{
    //     return () =>{
    //         mapRef.current?destroy();
    //     }
    // })
    // return (
    //     <>
    //         <Script
    //             strategy="afterInteractive"
    //             type="text/javascript"
    //             src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
    //             onLoad={initializeMap}
    //         />
    //         <div id={mapID} style={{width: '100%', height: "100%"}} />
    //     </>
    // );
};

export default Map;
