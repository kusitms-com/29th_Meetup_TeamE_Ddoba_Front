import React from 'react';

import Image from 'next/image';

export type NoticeItemProps = {
  img: string;
  title: string;
  subTitle: string;
  content: NoticeListType[];
};

export type NoticeListType = {
  type: string;
  content: string;
};

const NoticeItem = (props: NoticeItemProps) => {
  const { img, title, subTitle, content } = props;
  return (
    <div className="pt-[39px] pb-[41px] pl-[53px] pr-[53px] rounded-[20px] bg-gray-02 ">
      <div className="flex flex-row gap-[10px] text-gray-11 text-h2">
        <Image
          src={img}
          height={48}
          width={48}
          alt=""
          className="object-cover"
        />
        {title}
      </div>
      <div className="mt-[12px] text-h5 text-gray-09">{subTitle}</div>
      <div className="mt-[50px]">
        {content &&
          content.map((item, index) => {
            const result = '[' + item.type + ']' + ' ' + item.content;
            return (
              <>
                <div className="mt-[34px] text-h5 text-gray-09">{result}</div>
                <div className="mt-[14px] h-[1px] bg-gray-05"></div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default NoticeItem;
