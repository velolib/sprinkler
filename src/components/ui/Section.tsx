
export type SectionProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Section(props: SectionProps) {
  return (
      <section className={`relative min-h-screen h-full flex w-full`}>
        <div className={`w-full mx-auto flex justify-center items-center text-4xl ${props.className}`}>
          {props.children}
        </div>
      </section>
  );
}

export default Section;