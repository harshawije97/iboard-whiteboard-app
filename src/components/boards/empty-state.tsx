"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../ui/empty";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { LoaderCircleIcon, LoaderIcon } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import SuccessAnimation from "../shared/animations";
import { toast } from "sonner";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function EmptyState() {
  // Create a new board
  const { organization } = useOrganization();

  const onClickState = () => {
    alert("Create a new organization");
  };

  return (
    <>
      <div className="w-full h-full flex-1 justify-center items-center 3xl:pt-8">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="default">
              <Image
                priority
                src={"/images/empty.png"}
                alt="logo"
                width={650}
                height={650}
              />
            </EmptyMedia>
            <EmptyTitle className="lg:text-2xl text-xl font-semibold text-primary">
              Welcome to iBoard
            </EmptyTitle>
            <EmptyDescription className="text-xs sm:text-sm">
              New organization is required before your creativity
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="secondary" onClick={onClickState}>
              Create Organization
            </Button>
          </EmptyContent>
        </Empty>
      </div>
    </>
  );
}

export function EmptyBoards() {
  const { mutate, pending } = useApiMutation(api.board.createBoards);
  const { organization } = useOrganization();

  const onClickBoardState = async () => {
    if (!organization) {
      return null;
    }
    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then(() => {
        toast.success("Board created successfully", {
          position: "top-center",
          style: {
            color: "oklch(37.2% 0.044 257.287)",
          },
          icon: (
            <DotLottieReact
              src="https://lottie.host/66efdb46-ac4d-4cf7-a578-2aa313e95840/DbhgLVU6lu.lottie"
              autoplay
              width={500}
              height={500}
            />
          ),
        });
      })
      .catch((err) => {
        toast.error("Failed to create board", {
          description: String(err.message),
        });
      });
  };
  return (
    <>
      <div className="w-full h-full flex-1 justify-center items-center 3xl:pt-8">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="default">
              <Image
                priority
                src={"/images/no_boards.png"}
                alt="logo"
                width={650}
                height={650}
              />
            </EmptyMedia>
            <EmptyTitle className="lg:text-2xl text-xl font-semibold text-primary">
              No Boards Found
            </EmptyTitle>
            <EmptyDescription className="text-xs sm:text-sm">
              Your organization has no boards to begin with
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button
              variant="secondary"
              onClick={onClickBoardState}
              className="text-slate-700"
              disabled={pending}
            >
              {pending ? (
                <>
                  <LoaderCircleIcon className="mr-1 size-4.25 animate-spin text-slate-700" />
                  Creating
                </>
              ) : (
                "Create New Board"
              )}
            </Button>
          </EmptyContent>
        </Empty>
      </div>
    </>
  );
}

export function EmptyFavorites() {
  return (
    <>
      <div className="w-full h-full flex-1 justify-center items-center 3xl:pt-8">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="default">
              <Image
                priority
                src={"/images/favorites.png"}
                alt="logo"
                width={650}
                height={650}
              />
            </EmptyMedia>
            <EmptyTitle className="lg:text-2xl text-xl font-semibold text-primary">
              No Favorite Boards
            </EmptyTitle>
            <EmptyDescription className="text-xs sm:text-sm">
              Mark your favorite boards
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>
    </>
  );
}

export function EmptySearchBoards() {
  return (
    <>
      <div className="w-full h-full flex-1 justify-center items-center 3xl:pt-8">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="default">
              <Image
                priority
                src={"/images/search_2.png"}
                alt="logo"
                width={650}
                height={650}
              />
            </EmptyMedia>
            <EmptyTitle className="lg:text-2xl text-xl font-semibold text-primary">
              Search Results Not Found
            </EmptyTitle>
          </EmptyHeader>
          <EmptyContent>
            {/* <Button variant="secondary">Create Organization</Button> */}
          </EmptyContent>
        </Empty>
      </div>
    </>
  );
}

export default EmptyState;
