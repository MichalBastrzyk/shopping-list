import * as z from "zod"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "./ui/badge"

const formSchema = z.object({
  name: z
    .string({
      required_error: "Nazwa jest wymagana",
    })
    .trim()
    .min(2, { message: "Nazwa powinna mieć co najmniej 2 znaki." })
    .max(50, { message: "Nazwa nie może przekraczać 50 znaków." }),
  count: z.coerce
    .number({ required_error: "Ilość jest wymagana" })
    .min(1, { message: "Ilość musi być większa lub równa 1." }),
  unit: z.enum(["g", "kg", "ml", "pieces"], {
    required_error: "Jednostka jest wymagana.",
  }),
  tag: z.enum(["bread", "vegetables", "fruits", "beverages", "meat"], {
    required_error: "Tag jest wymagany.",
  }),
})

export function AddItemForm({
  onSubmit,
}: {
  onSubmit: (values: z.infer<typeof formSchema>) => void
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      count: 1,
      unit: undefined,
      tag: undefined,
    },
  })

  const hasErrors = Object.keys(form.formState.errors).length > 0

  return (
    <Form {...form}>
      <form
        className="group flex w-full flex-wrap items-end justify-start space-y-3 data-[error=true]:items-start sm:space-x-3"
        onSubmit={form.handleSubmit(onSubmit)}
        data-error={hasErrors}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Nazwa</FormLabel>
              <FormControl>
                <Input className="min-w-[10rem]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-x-0.5">
          <FormField
            control={form.control}
            name="count"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ilość</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    className="appearance-none rounded-r-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="unit"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jednostka</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger
                      className="min-w-[8rem] rounded-l-none"
                      aria-label="Jednostka"
                    >
                      <SelectValue placeholder="Jednostka" />
                      <span className="sr-only">Jednostka</span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="g">Gramy</SelectItem>
                      <SelectItem value="kg">Kilogramy</SelectItem>
                      <SelectItem value="ml">Mililitry</SelectItem>
                      <SelectItem value="pieces">Sztuki</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="tag"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tag</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} {...field}>
                  <SelectTrigger className="w-60" aria-label="Kategoria">
                    <SelectValue placeholder="Kategoria" />
                    <span className="sr-only">Kategoria</span>
                  </SelectTrigger>
                  <SelectContent className="w-60">
                    <SelectItem value="bread">
                      <Badge type="bread">
                        <Icons.sandwich className="h-4 w-4 text-yellow" />
                        <span>Pieczywo</span>
                      </Badge>
                    </SelectItem>
                    <SelectItem value="vegetables">
                      <Badge type="vegetables">
                        <Icons.carrot className="h-4 w-4" />
                        <span>Warzywa</span>
                      </Badge>
                    </SelectItem>
                    <SelectItem value="fruits">
                      <Badge type="fruits">
                        <Icons.apple className="h-4 w-4" />
                        <span>Owoce</span>
                      </Badge>
                    </SelectItem>
                    <SelectItem value="beverages">
                      <Badge type="beverages">
                        <Icons.milk className="h-4 w-4 text-blue" />
                        <span>Napoje</span>
                      </Badge>
                    </SelectItem>
                    <SelectItem value="meat">
                      <Badge type="meat">
                        <Icons.beef className="h-4 w-4" />
                        <span>Mięso</span>
                      </Badge>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mx-auto group-data-[error=true]:mt-8"
          aria-label="Dodaj"
        >
          <Icons.plus className="h-4 w-4" />
          <span className="sr-only">Dodaj</span>
        </Button>
      </form>
    </Form>
  )
}
