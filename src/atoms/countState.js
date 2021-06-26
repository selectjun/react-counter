import {
  atom,
  useResetRecoilState,
  useSetRecoilState
} from 'recoil';

export const countState = atom({
  key: "atom",
  default: 0
});

export function useResetCount() {
  return useResetRecoilState(countState);
};

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

  return {
    descreaseCount,
    increaseCount
  };
};