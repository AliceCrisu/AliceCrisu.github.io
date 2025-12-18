import { spacing, borders } from '../theme';
import SectionTitle from './SectionTitle';

const Gallery = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=1200&fit=crop&q=80', className: 'col-span-1 row-span-2' },
    { url: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=600&fit=crop&q=80', className: 'col-span-2 row-span-1' },
    { url: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=800&fit=crop&q=80', className: 'col-span-1 row-span-1' },
    { url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=800&fit=crop&q=80', className: 'col-span-1 row-span-1' },
    { url: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=1200&fit=crop&q=80', className: 'col-span-1 row-span-2' },
    { url: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=800&fit=crop&q=80', className: 'col-span-1 row-span-1' },
    { url: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1200&h=600&fit=crop&q=80', className: 'col-span-2 row-span-1' },
    { url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=800&fit=crop&q=80', className: 'col-span-1 row-span-1' }
  ];

  return (
    <>
      <SectionTitle id="gallery" subtitle="showcase" title="Gallery" />

      <section className="w-full bg-white" style={{ paddingBottom: spacing.sectionBottom }}>
        <div className="bg-black" style={{ padding: spacing.contentPadding }}>
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4 md:gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className={`md:${image.className} bg-cover bg-center border-2 md:border-[length:var(--border-thick)] border-white`}
                style={{
                  backgroundImage: `url(${image.url})`,
                  '--border-thick': borders.thick
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
