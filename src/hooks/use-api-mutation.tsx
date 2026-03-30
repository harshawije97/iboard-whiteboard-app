/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "convex/react";
import React from "react";

export const useApiMutation = (func: any) => {
  const [pending, setPending] = React.useState<boolean>(false);
  const apiMutation = useMutation(func);

  const mutate = async (payload: any) => {
    setPending(true);

    try {
          try {
              const result = await apiMutation(payload);
              return result;
          } catch (error) {
              return error;
          }
      } finally {
          setPending(false);
      }
  };

  return {
    pending,
    mutate,
  };
};
