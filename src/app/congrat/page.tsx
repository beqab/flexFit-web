"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Gift, Star, Users, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function CongratulationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mx-auto w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            გილოცავთ! 🎉
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            წარმატებით შეუერთდით FlexFit-ის პრომო აქციას!
          </p>
          
          {/* Campaign Reference */}
          <div className="mt-4 inline-flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-4 py-2">
            <span className="text-sm text-gray-600">შეუერთდით:</span>
            <span className="text-sm font-mono font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              {new Date().toLocaleDateString('ka-GE')}
            </span>
          </div>
          
          {/* <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg inline-block">
            <p className="text-sm text-blue-700">
              💡 <strong>შენიშვნა:</strong> თუ უკვე შეუერთდით აქციას, ეს გვერდი გვიჩვენებს თქვენს სტატუსს და შემდგომ ნაბიჯებს.
            </p>
          </div> */}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Success Details */}
          <div className="space-y-6">
            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardHeader className="text-center">
                <CardTitle className="text-green-800 flex items-center justify-center gap-2">
                  <Gift className="h-6 w-6" />
                  თქვენი ბონუსი
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-green-700 mb-2">
                  ერთთვიანი უფასო საწევრო
                </div>
                <p className="text-green-600">
                  აპლიკაციის გაშვების შემდეგ ავტომატურად მიიღებთ
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Users className="min-h-5 min-w-5" />
                  პირველი 500 მომხმარებელი
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  თქვენ ხართ პირველი 500 მომხმარებელს შორის, რომლებიც მიიღებენ უფასო საწევრობას!
                </p>
                
                {/* Progress Bar */}
                {/* <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>პროგრესი</span>
                    <span className="font-semibold text-blue-600">შევსებულია!</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full w-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">500/500</span>
                    </div>
                  </div>
                </div> */}
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="min-h-4 min-w-4" />
                  <span>აქცია მოქმედებს აპლიკაციის გაშვებამდე</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Next Steps */}
          <div className="space-y-6">
            <Card className="border-2 border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Star className="h-6 w-6" />
                  რა ხდება შემდეგ?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="min-w-6 min-h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">დაელოდეთ აპლიკაციის გაშვებას</p>
                    <p className="text-sm text-blue-600">ჩვენ გამოგიგზავნით შეტყობინებას, გაშვების შესახებ და პრომო კოდს</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="min-w-6 min-h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">ჩამოტვირთეთ აპლიკაცია</p>
                    <p className="text-sm text-blue-600">Google Play Store-დან</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="min-w-6 min-h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">გაააქტიურეთ უფასო საწევრო პრომო კოდით </p>
                    <p className="text-sm text-blue-600">ისარგებლეთ უფასო ვიზიტებით  პარტნიორ დაწესებულებებში</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-gray-800">
                  გაუზიარეთ მეგობრებს
                </CardTitle>
                <CardDescription>
                  მეგობრებსაც მიაწვდით უფასო საწევრობის შანსს
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => {
                      const url = "https://flexfit.ge"
                      const text = "შეუერთდი FlexFit-ის პრომო აქციას და მიიღე ერთთვიანი უფასო საწევრო! 🎉"
                      
                      if (navigator.share) {
                        navigator.share({
                          title: 'FlexFit პრომო აქცია',
                          text: text,
                          url: 'https://flexfit.ge'
                        })
                      } else {
                        // Fallback for browsers that don't support Web Share API
                        navigator.clipboard.writeText(`${text}\n\n${url}`)
                        alert('ბმული დაკოპირებულია!')
                      }
                    }}
                  >
                    გაუზიარეთ
                  </Button>
                  
                  {/* <Link href="https://tally.so/r/n9kQdK" target="_blank">
                    <Button variant="outline" className="w-full">
                      მეგობრის დამატება
                    </Button>
                  </Link> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="text-center space-y-4">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              ⚠️ მნიშვნელოვანი
            </h3>
            <p className="text-yellow-700">
              თქვენი უფასო საწევრობა ავტომატურად არ გაააქტიურდება. 
              აპლიკაციის გაშვების შემდეგ ჩვენ გავაგზავნით დეტალურ ინსტრუქციას.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="outline" size="lg">
                მთავარ გვერდზე დაბრუნება
              </Button>
            </Link>
            
            {/* <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => {
                window.open('https://play.google.com/store/apps/details?id=com.flexfit.app', '_blank')
              }}
            >
              აპის ჩამოტვირთვა
            </Button> */}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-500">
          <p className="text-sm">
            კითხვები გაქვთ? დაგვიკავშირდით{' '}
            <Link href="/contact" className="text-blue-600 hover:underline">
              აქ
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
