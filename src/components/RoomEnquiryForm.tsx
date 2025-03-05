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
  DialogClose,
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
import { X } from "lucide-react";

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
        <DialogContent className="sm:max-w-[95%] md:max-w-[85%] lg:max-w-[80%] border-none bg-lime p-0">
          <div className="sticky top-0 z-10 bg-lime p-8 pb-4">
            <DialogClose className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </DialogClose>
            <h2 className="text-center text-3xl lg:text-5xl font-playfair text-gray-900">
              Room Enquiry Form
            </h2>
          </div>
          <div className="px-8 pb-8 overflow-y-auto max-h-[75vh]">
            <FormContainer />
          </div>
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
      <DrawerContent 
        className="border-none bg-lime h-[80vh] [&>div:first-child]:hidden [&>[data-radix-drawer-close]]:hidden [&>[data-radix-drawer-handle]]:hidden [&>[data-radix-drawer-drag-handle]]:hidden [&>div[data-state]]:hidden [&>[data-radix-drawer-drag-handle]]:hidden"
        onPointerDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onInteractOutside={(e) => e.preventDefault()}
        onDrag={(e) => e.preventDefault()}
      >
        <div className="sticky top-0 z-10 bg-lime py-1">
          <DrawerClose className="absolute right-2 top-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DrawerClose>
          <h2 className="text-center text-base font-playfair text-gray-900 pt-1">
            Room Enquiry Form
          </h2>
        </div>
        <div className="overflow-y-auto px-2 pb-16 h-[calc(80vh-2rem)]">
          <FormContainer />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required and should be more than 3 characters",
  }),
  email: z.string().email({ message: "Please enter a valid Email ID" }),
  phoneNumber: z.string().length(11, { message: "Please enter a valid phone number" }),
  roomType: z.string().min(1, { message: "Please select a room type" }),
  arrival: z.date({
    required_error: "A check in date is required.",
  }),
  departure: z.date({
    required_error: "A check out date is required.",
  }),
  adult: z.number().min(1),
  children: z.number(),
  specialRequests: z.string().optional(),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

const FormContainer = () => {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      adult: 1,
      children: 0,
    }
  });

  const handleSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      console.log(values); // For testing, replace with your submission logic
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Form {...form}>
      <div className="relative max-w-5xl mx-auto">
        {showSuccess && (
          <div className="fixed top-0 left-0 right-0 bg-green-500 text-white p-2 text-center text-sm z-50">
            Reservation submitted successfully!
          </div>
        )}
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-2">
          {/* Personal Details Section */}
          <div className="space-y-1.5">
            <div className="grid grid-cols-1 gap-1.5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        {...field}
                        className="bg-transparent ring-0 border-0 border-b border-slate-950 placeholder:text-slate-900 rounded-none text-xs md:text-sm h-8"
                      />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="bg-transparent ring-0 border-0 border-b border-slate-950 placeholder:text-slate-900 rounded-none text-xs md:text-sm h-8"
                      />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Phone No."
                        {...field}
                        className="bg-transparent ring-0 border-0 border-b border-slate-950 placeholder:text-slate-900 rounded-none text-xs md:text-sm h-8"
                        type="number"
                      />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Stay Details Section */}
          <div className="space-y-1.5">
            <FormField
              control={form.control}
              name="roomType"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-transparent ring-0 border-0 border-b border-slate-950 placeholder:text-slate-900 rounded-none text-xs md:text-sm h-8">
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white text-gray-950 text-xs">
                      <SelectItem value="deluxe">Deluxe Room</SelectItem>
                      <SelectItem value="studio">Studio Room</SelectItem>
                      <SelectItem value="executive">Executive Room</SelectItem>
                      <SelectItem value="presidential">Presidential Room</SelectItem>
                      <SelectItem value="ambassadorial">Ambassadorial Room</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
          </div>

          {/* Dates and Guests Section */}
          <div className="grid grid-cols-1 gap-1.5">
            <FormField
              control={form.control}
              name="arrival"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[10px] md:text-xs">Arrival Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                      className="bg-transparent ring-0 border-0 border-b border-slate-950 rounded-none w-full [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:block text-xs md:text-sm h-7"
                      style={{ colorScheme: 'light' }}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="departure"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Departure Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                      className="bg-transparent ring-0 border-0 border-b border-slate-950 rounded-none w-full [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:block text-sm h-7"
                      style={{ colorScheme: 'light' }}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
          </div>

          {/* Adults/Children fields */}
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="adult"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Adults</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                      className="bg-transparent ring-0 border-0 border-b border-slate-950 rounded-none text-xs md:text-sm h-7"
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="children"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Children</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="0"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                      className="bg-transparent ring-0 border-0 border-b border-slate-950 rounded-none text-xs md:text-sm h-7"
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
          </div>

          {/* Special Requests */}
          <div className="space-y-1.5">
            <FormField
              control={form.control}
              name="specialRequests"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Special Requests (Optional)"
                      {...field}
                      className="bg-transparent ring-0 border-0 border-b border-slate-950 placeholder:text-slate-900 rounded-none resize-none h-12 text-xs md:text-sm min-h-[2rem]"
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
          </div>

          {/* Terms & Conditions */}
          <FormField
            control={form.control}
            name="acceptTerms"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-1">
                <FormControl>
                  <input
                    type="checkbox"
                    {...{...field, value: undefined}}
                    className="mt-0.5 h-3 w-3 rounded border-gray-300"
                  />
                </FormControl>
                <FormLabel className="text-[10px] md:text-xs">
                  I accept the <a href="#" className="text-blue-600">Terms & Conditions</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
                </FormLabel>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-gray-900 text-white h-8 text-xs md:text-sm"
          >
            Complete Reservation
          </Button>
        </form>
      </div>
    </Form>
  );
};