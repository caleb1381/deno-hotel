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
        <DialogContent className="sm:max-w-[90%] border-none bg-lime [&>button]:hidden">
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
  email: z.string().email({ message: "Please enter a valid Email ID" }),
  phoneNumber: z.string().length(11, { message: "Please enter a valid phone number" }),
  address: z.string().optional(),
  accountNumber: z.string().min(8, { message: "Please enter a valid account number" }),
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
    const emailBody = `
Name: ${values.name}
Email: ${values.email}
Phone: ${values.phoneNumber}
Address: ${values.address || 'Not provided'}
Account Number: ${values.accountNumber}
Room Type: ${values.roomType}
Arrival: ${values.arrival.toLocaleDateString()}
Departure: ${values.departure.toLocaleDateString()}
Adults: ${values.adult}
Children: ${values.children}
Special Requests: ${values.specialRequests || 'None'}
    `.trim();

    try {
      window.location.href = `mailto:denohotels@gmail.com?subject=New Room Enquiry&body=${encodeURIComponent(emailBody)}`;
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Form {...form}>
      <div className="relative max-w-4xl mx-auto">
        {showSuccess && (
          <div className="absolute top-0 left-0 right-0 bg-green-500 text-white p-3 text-center rounded-md">
            Form submitted successfully! Check your email client.
          </div>
        )}
        {/* Close button */}
        <DialogClose className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground md:block hidden">
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DrawerClose className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground md:hidden block">
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </DrawerClose>
        
        <div className="text-center text-2xl lg:text-4xl mt-5 font-playfair text-gray-900 mb-5">
          Room Enquiry Form
        </div>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          {/* Guest Information Section */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold border-b pb-1">Guest Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        {...field}
                        className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none"
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
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none"
                      />
                    </FormControl>
                    <FormMessage />
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
                        className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none"
                        type="number"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Address (Optional)"
                        {...field}
                        className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Payment & Stay Details in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Payment Section */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold border-b pb-1">Payment & Billing</h2>
              <FormField
                control={form.control}
                name="accountNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Account Number"
                        {...field}
                        className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-xs text-gray-600">Please send proof of payment</p>
            </div>

            {/* Stay Details Section */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold border-b pb-1">Stay Details</h2>
              <FormField
                control={form.control}
                name="roomType"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none">
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white text-gray-950">
                        <SelectItem value="deluxe">Deluxe Room</SelectItem>
                        <SelectItem value="suite">Suite</SelectItem>
                        <SelectItem value="standard">Standard Room</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Dates and Guests Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="arrival"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Arrival Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                        className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 rounded-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="departure"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Departure Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        value={field.value ? new Date(field.value).toISOString().split('T')[0] : ''}
                        className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 rounded-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="adult"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adults</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="1"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value))}
                          className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 rounded-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="children"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Children</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="0"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value))}
                          className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 rounded-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="specialRequests"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Special Requests (Optional)"
                      {...field}
                      className="bg-transparent ring-0 border-0 border-b-2 border-slate-950 placeholder:text-slate-900 rounded-none resize-none h-16"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Terms & Conditions */}
          <FormField
            control={form.control}
            name="acceptTerms"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-2">
                <FormControl>
                  <input
                    type="checkbox"
                    {...{...field, value: undefined}}
                    className="mt-1 h-4 w-4 rounded border-gray-300"
                  />
                </FormControl>
                <FormLabel className="text-sm">
                  I accept the <a href="#" className="text-blue-600">Terms & Conditions</a> and <a href="#" className="text-blue-600">Privacy Policy</a>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full md:w-auto bg-gray-900 text-white px-8 h-10"
          >
            Complete Registration
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default EnquiryForm;