import React from "react";
import { Image } from "react-native";

const MapImage: React.FC = () => (
  <Image
    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/1/12/Poland_location_map.svg" }}
    style={{ width: 300, height: 200, marginVertical: 20 }}
    resizeMode="contain"
  />
);

export default MapImage;
