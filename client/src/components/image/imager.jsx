import { Image } from '@imagekit/react';

const Imager = ({src,alt,className,w,h}) => {
  return (
    <Image
          urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
          src={src}
          transformation={[{ width: w, height: h }]}
          loading="lazy"
          alt={alt}
          className = {className}
          ></Image>
  )
}

export default Imager