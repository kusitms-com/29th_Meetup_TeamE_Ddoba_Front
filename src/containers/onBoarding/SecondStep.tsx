import React from 'react';

import OnboardingFrame from '@/components/onBoarding/OnboardingFrame';

import Image from 'next/image';

const SecondStep = () => {
  return (
    <OnboardingFrame
      stepImg={
        <Image
          src="/assets/onboarding/second_step.png"
          width={300}
          height={12}
          alt={''}
        />
      }
      title={'배움 나누기'}
      subTitle={
        '내가 배움 선배가 되어 가르치거나, 내가 배움 후배가 되어 배우거나!'
      }
      centerImg={
        <Image
          src="/assets/onboarding/second_center_img.png"
          width={1200}
          height={736}
          className="mt-[124px]" // step에서부터 124px
          alt={''}
        />
      }
    />
  );
};

export default SecondStep;
