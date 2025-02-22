"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import CustomInputWithCalendar from "./CustomInputWithCalendar";

export const FormSchema = z.object({
  checkin: z.date({
    required_error: "A check in date is required.",
  }),
  checkout: z.date({
    required_error: "A check out date is required.",
  }),
  // guest: z.number().min(1),
  numberOfGuests: z.string(),
});

const HeroForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}

  return (
    <div className="hero_form">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="hero_form__container">
            <CustomInputWithCalendar
              control={form.control}
              name="checkin"
              label="Check in"
            />
            <CustomInputWithCalendar
              control={form.control}
              name="checkout"
              label="Check out"
            />

            <FormField
              control={form.control}
              name="numberOfGuests"
              render={({ field }) => (
                <FormItem>
                  <div className="flex flex-col justify-center text-left p-4 md:p-8 gap-2">
                    <FormLabel className="text-lg md:text-xl lg:text3xl text-gray-600">
                      Number of Guests
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-none text-3xl lg:text-5xl font-semibold px-0">
                          <SelectValue
                            placeholder="1"
                            className="!text-3xl lg:text-5xl font-semibold"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white">
                        {Array.from({ length: 10 }, (_, i) =>
                          (i + 1).toString()
                        ).map((item) => (
                          <SelectItem value={item} key={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </FormItem>
              )}
            />

            {/* <div className="h-full border-r-2">
              <div className="flex flex-col justify-center text-left p-4 md:p-8">
                <p className="text-lg md:text-xl lg:text3xl text-gray-600">
                  Guests
                </p>

                <Select>
                  <SelectTrigger className="w-full border-none ">
                    <div className="!h-auto flex justify-between pr-3 items-end cursor-pointer w-full">
                      <p className="flex gap-1 items-end">
                        <span className="text-3xl lg:text-5xl font-semibold">
                          22
                        </span>
                      </p>
                       <span>
                        <ChevronDown className="text-gray-600" />
                      </span> 
                    </div>
                  </SelectTrigger>

                  <SelectContent className="bg-white">
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>  */}

            <div className="h-full flex justify-center items-center p-5 bg-lime text-gray-600 lg:text-2xl  font-semibold cursor-pointer">
              CHECK AVALIABILITY
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default HeroForm;
