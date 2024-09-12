"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { Search } from "lucide-react";

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/" && !isOpen) {
        event.preventDefault();
        setIsOpen(true);
      }
      if (event.metaKey && event.key === "k") {
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <div className="text-center">
        <Dialog.Trigger asChild>
        <button className="relative inline-flex w-full max-w-xs items-center justify-between whitespace-nowrap rounded-full border border-slate-300 bg-white py-2 px-4 text-sm text-slate-400 outline-none hover:border-slate-400 focus-visible:border-indigo-400 focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-indigo-100">
  <div className="flex items-center w-36 justify-between ">
    {/* Search text aligned to the left */}
    <p className=" text-slate-500">Search...</p>

    {/* Search icon aligned to the right */}
   <Search className="w-4 h-4 text-slate-500" />
  </div>
</button>

        </Dialog.Trigger>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid max-h-[85vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] overflow-hidden border bg-white shadow-lg duration-200 sm:rounded-lg">
          <VisuallyHidden.Root>
            <Dialog.Title>Search</Dialog.Title>
            <Dialog.Description>
              Start typing to search the documentation
            </Dialog.Description>
          </VisuallyHidden.Root>
          <form className="border-b border-slate-200">
            <div className="flex items-center">
              <VisuallyHidden.Root>
                <label htmlFor="search-modal">Search</label>
              </VisuallyHidden.Root>
              <svg
                className="ml-4 h-4 w-4 shrink-0 fill-slate-500"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m14.707 13.293-1.414 1.414-2.4-2.4 1.414-1.414 2.4 2.4ZM6.8 12.6A5.8 5.8 0 1 1 6.8 1a5.8 5.8 0 0 1 0 11.6Zm0-2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z" />
              </svg>
              <input
                id="search-modal"
                className="[&::-webkit-search-decoration]:none [&::-webkit-search-results-button]:none [&::-webkit-search-results-decoration]:none [&::-webkit-search-cancel-button]:hidden w-full appearance-none border-0 bg-white py-3 pl-2 pr-4 text-sm placeholder-slate-400 text-black focus:outline-none"
                type="search"
                placeholder="Search"
              />
            </div>
          </form>
          <ScrollArea.Root className="max-h-[calc(85vh-44px)]">
            <ScrollArea.Viewport className="h-full w-full">
              <div className="space-y-4 px-2 py-4">
                <div>
                  <div className="mb-2 px-2 text-xs font-semibold uppercase text-gray-400">
                    Recent
                  </div>
                  <ul>
                    <li>
                      <Link
                        className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
                        href="#0"
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-slate-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <span>Alternative Schemas</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
                        href="#0"
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-slate-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <span>Query string parameters</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
                        href="#0"
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-slate-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <span>Integrations</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
                        href="#0"
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-slate-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <span>Organize Contacts with Tags</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="mb-2 px-2 text-xs font-semibold uppercase text-gray-400">
                    Suggestions
                  </div>
                  <ul>
                    <li>
                      <Link
                        className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
                        href="#0"
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-slate-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <span>Flexbox and Grid</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
                        href="#0"
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-slate-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <span>API Reference</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-slate-700 outline-none focus-within:bg-slate-100 hover:bg-slate-100"
                        href="#0"
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-slate-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <span>Authentication</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className="flex h-full w-2 touch-none select-none border-l border-l-transparent p-[1px] transition-colors"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="relative flex-1 rounded-full bg-slate-300" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar
              className="flex h-2.5 touch-none select-none flex-col border-t border-t-transparent p-[1px] transition-colors"
              orientation="horizontal"
            >
              <ScrollArea.Thumb className="relative flex-1 rounded-full bg-slate-300" />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner className="bg-blackA5" />
          </ScrollArea.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}