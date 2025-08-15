import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ArrowRight,
  Dumbbell,
  Filter,
  Search,
  Sparkles,
  Waves
} from 'lucide-react'
import Link from 'next/link'

export default function ActivitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-20 sm:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            აქტივობები
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            <span className="font-bold text-yellow-300">130+ ლოკაცია</span> და <span className="font-bold text-yellow-300">78+ აქტივობა</span> ერთი აბონემენტით
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              აპის ჩამოტვირთვა
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              <Link href="/pricing">გეგმების ნახვა</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="მოძებნეთ აქტივობა ან ლოკაცია..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button variant="outline" className="px-6">
                <Filter className="w-4 h-4 mr-2" />
                ფილტრი
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              აქტივობების კატეგორიები
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              აირჩიეთ თქვენთვის სასურველი აქტივობა და დაიწყეთ ჯანსაღი ცხოვრების მოგზაურობა
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gym & Fitness */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Dumbbell className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-blue-600">სპორტდარბაზები</CardTitle>
                <CardDescription>ფიტნესი და ძალის ვარჯიში</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>• ძალის ვარჯიში</p>
                  <p>• კარდიო ვარჯიში</p>
                  <p>• ჯგუფური გაკვეთილები</p>
                  <p>• პერსონალური ტრენერი</p>
                </div>
                <div className="flex items-center justify-center text-blue-600 font-semibold">
                  <span>25+ ლოკაცია</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>

            {/* Swimming */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Waves className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-600">საცურაო აუზები</CardTitle>
                <CardDescription>ცურვა და წყლის აქტივობები</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>• თავისუფალი ცურვა</p>
                  <p>• ცურვის გაკვეთილები</p>
                  <p>• წყლის აერობიკა</p>
                  <p>• ბავშვთა ცურვა</p>
                </div>
                <div className="flex items-center justify-center text-green-600 font-semibold">
                  <span>18+ ლოკაცია</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>

            {/* Yoga & Pilates */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-purple-600">იოგა და პილატესი</CardTitle>
                <CardDescription>მედიტაცია და ფიზიკური ჰარმონია</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>• ჰათა იოგა</p>
                  <p>• ვინიასა იოგა</p>
                  <p>• პილატესი</p>
                  <p>• მედიტაცია</p>
                </div>
                <div className="flex items-center justify-center text-purple-600 font-semibold">
                  <span>22+ ლოკაცია</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            მზად ხართ აქტივობის დასაწყებად?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            შემოუერთდით FlexFit-ს დღესვე და დაიწყეთ თქვენი ჯანსაღი ცხოვრების მოგზაურობა
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              აპის ჩამოტვირთვა
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              <Link href="/pricing">გეგმების ნახვა</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
