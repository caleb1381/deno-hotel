
import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

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
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function EnquiryForm() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="text-xl font-playfair bg-lime px-8 h-10">
            Reserve Now
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[90%] border-none bg-lime">
          <FormContainer />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="text-xl font-playfair bg-lime px-8 h-10">
          Reserve Now
        </Button>
      </DrawerTrigger>
      <DrawerContent className="border-none bg-lime px-10 pb-10">
        <FormContainer />
      </DrawerContent>
    </Drawer>
  );
}

export const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required and should be more than 3 characters",
  }),
  email: z.string().email({ message: "Pls enter Email ID" }),
  phoneNumber: z
    .string()
    .length(11, { message: "Pls enter a valid phone number" }),
  roomType: z.string().default("Test"), // get default from room page
  arrival: z.date({
    required_error: "A check in date is required.",
  }),
  departure: z.date({
    required_error: "A check out date is required.",
  }),
  adult: z.number().min(1),
  children: z.number(),
  message: z.string({ message: "Enter a message" }).min(10, {
    message: "Pls enter a message that is more than 10 charaters long",
  }),
});

function onSubmit(values: z.infer<typeof FormSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}

const FormContainer = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  return (
    <Form {...form}>
      <div className="text-center text-3xl lg:text-5xl mt-5 font-playfair text-gray-900 mb-5 lg:mb-10">
        Rooms Forms
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* row 1 */}
        <div className="flex gap-4 md:gap-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none text-lg md:text-xl focus:borde focus:border-b-2 "
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none text-lg md:text-xl focus:borde focus:border-b-2 "
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* row 2 */}
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Phone No."
                    {...field}
                    className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none text-lg md:text-xl focus:borde focus:border-b-2 "
                    type="number"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* row 3 */}
        <div className="flex gap-4 md:gap-8">
          <div className="flex-1">
            <FormField
              control={form.control}
              name="roomType"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-lg md:text-xl text-slate-900">
                    Room Type
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none text-lg md:text-xl focus:borde focus:border-b-2 ">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white text-gray-950">
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-4  flex-1">
            <FormField
              control={form.control}
              name="roomType"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-lg md:text-xl text-slate-900">
                    Adult
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none text-lg md:text-xl focus:borde focus:border-b-2 ">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white text-gray-950">
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="roomType"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-lg md:text-xl text-slate-900">
                    Children
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none text-lg md:text-xl focus:borde focus:border-b-2 ">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white text-gray-950">
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* row 4 */}
        <div className="flex gap-4 md:gap-8">
          <FormField
            control={form.control}
            name="roomType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg md:text-xl text-slate-900">
                  Arrival
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none text-lg md:text-xl focus:borde focus:border-b-2 ">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white text-gray-950">
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="roomType"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-lg md:text-xl text-slate-900">
                  Departure
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none text-lg md:text-xl focus:borde focus:border-b-2 ">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white text-gray-950">
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* row 5 */}
        <div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    {...field}
                    className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none text-lg md:text-xl focus:borde focus:border-b-2 "
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="p-3 hidden lg:block" />

        <Button
          type="submit"
          className="mt-20 bg-gray-900 text-white text-lg lg:text-xl px-8 h-11 lg:px-12 lg:h-16"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
