"use client";

import { AlarmClock, CalendarIcon, ChevronDown } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Control, FieldPath } from "react-hook-form";
import { FormSchema } from "./HeroForm";
import { z } from "zod";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "./ui/calendar";

import { format } from "date-fns";

interface CustomInput {
  //   form: typeof Form;
  control: Control<z.infer<typeof FormSchema>>;
  name: FieldPath<z.infer<typeof FormSchema>>;
  label?: string;
}

const CustomInputWithCalendarRoomForm = ({
  control,
  name,
  label,
}: CustomInput) => {
  return (
    <div className="h-full mb-4">
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div>
            <FormItem className="flex flex-col">
              <FormLabel className="text-lg font-semibold flex gap-1 items-center">
                <AlarmClock className="!text-sm text-gray-500" />
                {label}
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      className={cn(
                        "w-full pl-3 text-left font-normal border border-gray-700 ",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(new Date(field.value), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    // selected={new Date()}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="bg-white"
                  />
                </PopoverContent>
              </Popover>

              {/* <FormMessage /> */}
            </FormItem>
          </div>
        )}
      />
    </div>
  );
};

export default CustomInputWithCalendarRoomForm;
