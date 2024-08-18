import React from "react";
import Layout from "@/components/Layout";
import {
  CommentIconSm,
  DownLine,
  EmailIconSmTwoTone,
  FacebookSm,
} from "@/components/SvgIcons";
import Topbar from "@/components/Topbar";
import { ButtonGradient, CollapseBox } from "@/components/Widget";
// import Calendar from "@/components/Calendar";
import ScheduledTable from "@/components/ScheduledTable";

export default function index() {
  return (
    <Layout signed>
      <Topbar
        title="Schedule Post"
        description="Vorem ipsum dolor sit amet, consectetur adipiscing elit."
        action={
          <div className="flex items-center gap-2 bg-[#E7EAFF] py-3 px-[14px] rounded-[10px] cursor-pointer">
            <div className="flex items-center gap-1.5">
              <span className="gradient-text-1 relative z-10 font-aeonik font-bold text-2xl">
                Select Business
              </span>
            </div>
            <button>
              <DownLine color="#0F44FF" />
            </button>
          </div>
        }
      />
      <div className="flex min-h-[calc(100vh-125px)]">
        <div className="w-[452px] h-full bg-[#F4F6FF] flex justify-between flex-col min-h-[calc(100vh-125px)]">
          <div className="m-6">
            <button className="flex relative rounded-[10px] overflow-hidden w-full justify-center py-3 text-xl font-jakarta font-bold text-white group">
              <ButtonGradient isAnimation={true} />
              <span className="relative">Scheduled New Post</span>
            </button>
            <div className="mt-6">
            <div className="">
  <div className="flex items-center justify-between font-aeonik">
    <div className="text-h4 leading-h4 font-bold tracking-[-0.72px] text-[#3B3C40]">
      August
      <span className="text-h6 leading-h6 gradient-text-4 ml-1">2024</span>
    </div>
    <div className="">
      <button className="w-6 h-6">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.2483 6.3516C15.4733 6.57664 15.5996 6.88181 15.5996 7.2C15.5996 7.5182 15.4733 7.82337 15.2483 8.0484L11.2967 12L15.2483 15.9516C15.4669 16.1779 15.5878 16.481 15.5851 16.7957C15.5824 17.1103 15.4562 17.4113 15.2337 17.6338C15.0112 17.8563 14.7102 17.9825 14.3956 17.9852C14.0809 17.9879 13.7778 17.867 13.5515 17.6484L8.75149 12.8484C8.52653 12.6234 8.40015 12.3182 8.40015 12C8.40015 11.6818 8.52653 11.3766 8.75149 11.1516L13.5515 6.3516C13.7765 6.12664 14.0817 6.00026 14.3999 6.00026C14.7181 6.00026 15.0233 6.12664 15.2483 6.3516V6.3516Z"
            fill="#666666"
          />
        </svg>
      </button>
      <button className="w-6 h-6 rotate-180">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.2483 6.3516C15.4733 6.57664 15.5996 6.88181 15.5996 7.2C15.5996 7.5182 15.4733 7.82337 15.2483 8.0484L11.2967 12L15.2483 15.9516C15.4669 16.1779 15.5878 16.481 15.5851 16.7957C15.5824 17.1103 15.4562 17.4113 15.2337 17.6338C15.0112 17.8563 14.7102 17.9825 14.3956 17.9852C14.0809 17.9879 13.7778 17.867 13.5515 17.6484L8.75149 12.8484C8.52653 12.6234 8.40015 12.3182 8.40015 12C8.40015 11.6818 8.52653 11.3766 8.75149 11.1516L13.5515 6.3516C13.7765 6.12664 14.0817 6.00026 14.3999 6.00026C14.7181 6.00026 15.0233 6.12664 15.2483 6.3516V6.3516Z"
            fill="#666666"
          />
        </svg>
      </button>
    </div>
  </div>
  <div className="grid grid-cols-7 font-jakarta text-md leading-md font-semibold p-1 gap-1 uppercase text-[#71717A] mt-5">
    <div className="text-center">sun</div>
    <div className="text-center">mon</div>
    <div className="text-center">tue</div>
    <div className="text-center">wed</div>
    <div className="text-center">thu</div>
    <div className="text-center">fri</div>
    <div className="text-center">sat</div>
  </div>
  <div className="">
    <div className="grid grid-cols-7 gap-x-1 gap-y-[5px] mt-[5px]">
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#71717A]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">28</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#71717A]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">29</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#71717A]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">30</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#71717A]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">31</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">1</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">2</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">3</div>
      </div>
    </div>
    <div className="grid grid-cols-7 gap-x-1 gap-y-[5px] mt-[5px]">
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">4</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">5</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">6</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">7</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">8</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">9</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">10</div>
      </div>
    </div>
    <div className="grid grid-cols-7 gap-x-1 gap-y-[5px] mt-[5px]">
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">11</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">12</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">13</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">14</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">15</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">16</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-white">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600">
          <div className="absolute left-0 w-full gradient from-primary-200 to-primary-300 bg-gradient-to-r top-0 h-full" />
        </div>
        <div className="relative">17</div>
      </div>
    </div>
    <div className="grid grid-cols-7 gap-x-1 gap-y-[5px] mt-[5px]">
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">18</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">19</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">20</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">21</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">22</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">23</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">24</div>
      </div>
    </div>
    <div className="grid grid-cols-7 gap-x-1 gap-y-[5px] mt-[5px]">
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">25</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">26</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">27</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">28</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">29</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">30</div>
      </div>
      <div className="cursor-pointer p-1 flex flex-col text-md leading-md font-jakarta font-medium items-center justify-center gap-1 relative group text-[#3B3C40]">
        <div className="opacity-0 group-hover:opacity-100 duration-200 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full overflow-hidden bg-secondary-600" />
        <div className="relative">31</div>
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
          <div className="p-6">
            <p className="text-primary-700 font-jakarta text-l leading-l font-semibold mb-7">
              Scheduled Details
            </p>
            <div className="flex flex-col gap-[14px]">
              <CollapseBox title="Today Post" defaultOpened={true}>
                <ul className="flex flex-col gap-[14px]">
                  <li>
                    <div className="font-jakarta text-xl leading-xl font-semibold text-[#3B3C40] flex items-center gap-2">
                      <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-primary-700" />
                        Abstract 3D
                      </div>
                      <div className="bg-[#FFC9E4] rounded-lg flex items-center gap-1 text-[#FF1389] font-jakarta text-sm leading-sm p-1">
                        <CommentIconSm />
                        Blog
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="font-jakarta text-xl leading-xl font-semibold text-[#3B3C40] flex items-center gap-2">
                      <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-primary-700" />
                        Promotional Email
                      </div>
                      <div className="bg-[#E7EAFF] rounded-lg flex items-center gap-1 text-[#5B58F5] font-jakarta text-sm leading-sm p-1">
                        <EmailIconSmTwoTone />
                        Email
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="font-jakarta text-xl leading-xl font-semibold text-[#3B3C40] flex items-center gap-2">
                      <div className="flex gap-2 items-center">
                        <div className="w-2 h-2 rounded-full bg-primary-700" />
                        Announcement AMA
                      </div>
                      <div className="bg-[#C5E9FF] rounded-lg flex items-center gap-1 text-[#0F77FF] font-jakarta text-sm leading-sm p-1">
                        <FacebookSm />
                        Facebook
                      </div>
                    </div>
                  </li>
                </ul>
              </CollapseBox>
              <CollapseBox title="Tomorrow"></CollapseBox>
              <CollapseBox title="This Week"></CollapseBox>
              <CollapseBox title="Month"></CollapseBox>
            </div>
          </div>
        </div>
        <div className="w-[calc(100%-452px)] h-full bg-white min-h-[calc(100vh-125px)]">
          <ScheduledTable />
        </div>
      </div>
    </Layout>
  );
}
