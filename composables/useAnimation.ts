import { MotionVariants } from "@vueuse/motion";

export const useAnimation = () => {
  const target = ref(null);
  const variants = ref<MotionVariants>({
    initial: {
      y: 100,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 500,
      },
    },
  });

  useMotion(target, variants);

  return target;
};
