import { ImgHTMLAttributes } from "react";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  webpSrc?: string;
  priority?: boolean;
  alt: string;
}

/**
 * Drop-in replacement for <img>. Renders <picture> with a WebP source
 * (auto-derived from src if not provided) and a JPG/PNG fallback.
 * Lazy-loads by default; pass `priority` for above-the-fold images.
 */
const SmartImage = ({
  src,
  webpSrc,
  priority = false,
  alt,
  className,
  ...rest
}: SmartImageProps) => {
  // Auto-derive webp sibling from Vite-hashed src (works at runtime too)
  const derivedWebp = webpSrc || src.replace(/\.(jpe?g|png)(\?.*)?$/i, ".webp$2");

  return (
    <picture className={className ? undefined : undefined}>
      <source srcSet={derivedWebp} type="image/webp" />
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
