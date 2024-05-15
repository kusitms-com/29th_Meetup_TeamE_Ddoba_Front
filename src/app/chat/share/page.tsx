import { OneRoomItem } from '@/components/chat/OneRoomItem';
import { RoomItem } from '@/components/chat/RoomItem';

import { ChatRoom } from '@/containers/chat/ChatRoom';
import { RoomList } from '@/containers/chat/RoomList';

import { dummyData } from '../activity/page';

export default function ChatShare() {
  return (
    <div className="w-full mx-auto pt-[40px] max-w-[1200px] border border-black flex">
      <RoomList
        title="배움 나누기 대화방"
        subTitle="1:1 대화를 통해 만남을 확정해보아요!"
      >
        {/* <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem />
        <RoomItem /> */}
        {dummyData.map((item, idx) => {
          return (
            <div key={idx} className="pr-[5px]">
              <OneRoomItem data={item} />
            </div>
          );
        })}
      </RoomList>

      <section className="flex-1">
        {/* <EmptyChat /> */}
        <ChatRoom />
      </section>
    </div>
  );
}