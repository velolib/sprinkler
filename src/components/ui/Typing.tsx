import { motion } from "framer-motion";

export type TypingProps = {
  text: string
  delay?: number
}

function Typing(props: TypingProps) {
  const text = props.text.split('');

  return (
    <>
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0, transform: "translateY(-20px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)", transition: {
            duration: 0.125,
            delay: ((props.delay || 0 )) +  i / 30,
          } }}
          transition={{
            ease: "easeOut"
          }}
          key={i}
          className={el == " " ? "" : "inline-block"}
          exit={{ transition: { duration: 0, ease: "easeOut", delay: 0 } }}
        >
          {el}
        </motion.span>
      ))}
    </>
  );
}

export default Typing;