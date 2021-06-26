import {
  atom,
  useSetRecoilState
} from 'recoil';

export const countState = atom({
  key: "count",
  default: 0
});

export function useCountUpdate() {
  return useSetRecoilState(countState);
};

export function useCountActions () {
  const update = useCountUpdate();

  const descreaseCount = () => {
    update((state) => state - 1);
  };

  const increaseCount = () => {
    update((state) => state + 1);
  };

  const resteCount = () => {
    update((state) => 0);
  };

  return {
    descreaseCount,
    increaseCount,
    resteCount
  };
};