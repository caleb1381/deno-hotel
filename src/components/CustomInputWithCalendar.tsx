"use client";

import { ChevronDown } from "lucide-react";
import { FormField, FormItem, FormLabel, FormControl } from "./ui/form";
import { Control, FieldPath } from "react-hook-form";
import { FormSchema } from "./HeroForm";
import { z } from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import React from "react";
import moment from "moment";

interface CustomInput {
  //   form: typeof Form;
  control: Control<z.infer<typeof FormSchema>>;
  name: FieldPath<z.infer<typeof FormSchema>>;
  label?: string;
}

const CustomInputWithCalendar = ({ control, name, label }: CustomInput) => {
  const today = moment().startOf("day");

  return (
    <div className="h-full border-r-2">
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="flex flex-col justify-center text-left p-4 md:p-8">
            <FormLabel className="text-lg md:text-xl lg:text3xl text-gray-600">
              {label}
            </FormLabel>

            <div className="!h-auto flex justify-between pr-3 items-end cursor-pointer">
              <Popover>
                <PopoverTrigger asChild className="w-full">
                  <FormControl>
                    <div className="flex items-end justify-between">
                      <p className="flex gap-1 items-end">
                        <span className="text-3xl lg:text-5xl font-semibold">
                          {field.value instanceof Date
                            ? field.value.getDate()
                            : "22"}
                        </span>
                        <span className=" font-semibold">/</span>
                        <span className=" font-semibold">
                          {field.value instanceof Date
                            ? field.value.toLocaleString("default", {
                                month: "short",
                              })
                            : "Dec"}
                        </span>
                      </p>
                      <span>
                        <ChevronDown className="text-gray-600" />
                      </span>
                    </div>
                    {/* <p className="text-3xl text-black">a</p> */}
                  </FormControl>
                </PopoverTrigger>

                <PopoverContent className="bg-white">
                  <Calendar
                    mode="single"
                    selected={
                      field.value instanceof Date ? field.value : undefined
                    }
                    onSelect={(date) => {
                      field.onChange(date || undefined);
                      // console.log(date);
                    }}
                    disabled={(date) => moment(date).isBefore(today)}
                    className="rounded-md "
                  />
                </PopoverContent>
              </Popover>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};

export default CustomInputWithCalendar;
