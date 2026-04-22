import { ImgHTMLAttributes } from "react";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  webpSrc?: string;
  priority?: boolean;
  alt: string;
}

/**
 * Drop-in replacement for <img>. Renders <picture> with a WebP <source>
 * + JPG/PNG fallback. Lazy by default; pass `priority` for above-the-fold.
 *
 * Pass `webpSrc` explicitly when using Vite-imported assets (filenames are
 * hashed so we can't auto-derive). Auto-derivation works for /public URLs.
 */
const SmartImage = ({
  src,
  webpSrc,
  priority = false,
  alt,
  className,
  ...rest
}: SmartImageProps) => {
  const derivedWebp =
    webpSrc ||
    (src.startsWith("/") ? src.replace(/\.(jpe?g|png)(\?.*)?$/i, ".webp$2") : undefined);

  return (
    <picture>
      {derivedWebp && <source srcSet={derivedWebp} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        // @ts-expect-error fetchpriority is a valid HTML attribute
        fetchpriority={priority ? "high" : "auto"}
        className={className}
        {...rest}
      />
    </picture>
  );
};

export default SmartImage;
