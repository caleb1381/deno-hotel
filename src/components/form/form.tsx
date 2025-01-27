import { zodResolver } from "@hookform/resolvers/zod";
import CustomInputWithCalendar from "../CustomInputWithCalendar";
import CustomInputWithCalendarRoomForm from "../CustomInputWithCalendarRoomForm";
import { FormSchema } from "../HeroForm";
import { z } from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChevronDown } from "lucide-react";

const FormContainer = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}
  return (
    <div className="w-full  bg-[#eeeeeedc] mt-10 lg:mt-20 rounded-xl p-4 md:p-8">
      <p className="text-gray-950 text-xl md:text-2xl font-bold">Book A Room</p>

      <div className="mt-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <CustomInputWithCalendarRoomForm
              control={form.control}
              name="checkin"
              label="Check in"
            />
            <CustomInputWithCalendarRoomForm
              control={form.control}
              name="checkout"
              label="Check Out"
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormContainer;
