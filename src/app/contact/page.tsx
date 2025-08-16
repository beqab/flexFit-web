import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Building,
  Facebook,
  Instagram,
  Linkedin,
  Mail as MailIcon,
  MessageCircle,
  Phone,
  Send,
  Twitter,
  User
} from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-20 sm:py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            კონტაქტი
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            <span className="font-bold text-yellow-300">დაგვიკავშირდით</span> და ჩვენ მალე გიპასუხილვებთ
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ჩვენთან დაკავშირების გზები
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              გაქვთ კითხვები ან გჭირდებათ დახმარება? ჩვენ ვზღუდავთ თქვენს შეტყობინებას
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>ტელეფონით</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  დაგვიკავშირდით ტელეფონით და ჩვენი გუნდი მზადაა დაგეხმაროთ
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">+995 555 123 456</p>
                  <p className="font-semibold text-gray-900">+995 555 123 457</p>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  ორშაბათი - პარასკევი: 9:00 - 18:00
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>ელ-ფოსტით</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  გაგვიგზავნეთ ელ-ფოსტა და ჩვენ 24 საათში დაგიკავშირდებით
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">info@flexfit.ge</p>
                  <p className="font-semibold text-gray-900">support@flexfit.ge</p>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  ყოველდღე 24/7
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>პირადად</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  მოინახულეთ ჩვენი ოფისი და დაგვიკავშირდით პირადად
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">თბილისი, საქართველო</p>
                  <p className="font-semibold text-gray-900">ვაჟა-ფშაველას 76</p>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  ორშაბათი - პარასკევი: 9:00 - 18:00
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Office Location */}
          {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">ჩვენი ოფისი</h3>
            <p className="text-gray-600 mb-6">
              მოვიდით ჩვენთან და გაეცანით ჩვენს გუნდს პირადად
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Building className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">FlexFit Tower, 8-ე სართული</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">ვაჟა-ფშაველას 76, თბილისი</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Calendar className="w-6 h-6 text-purple-600" />
                <span className="text-gray-700">ორშაბათი - პარასკევი</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                გამოგვიგზავნეთ შეტყობინება
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                შეავსეთ ფორმა ქვემოთ და ჩვენ მალე დაგიკავშირდებით. 
                ჩვენი გუნდი მზადაა დაგეხმაროთ ნებისმიერ საკითხზე.
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">დაგვიკავშირდით</CardTitle>
                <CardDescription>
                  ჩვენ ვპასუხობთ ყველა შეტყობინებას 24 საათში
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        სახელი და გვარი *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="თქვენი სახელი და გვარი"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MailIcon className="w-4 h-4 inline mr-2" />
                        ელ-ფოსტა *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="თქვენი ელ-ფოსტა"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        ტელეფონი
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+995 579 29 66 56"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        კომპანია
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="თქვენი კომპანია (არასავალდებულო)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      თემა *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">აირჩიეთ თემა</option>
                      <option value="general">ზოგადი კითხვები</option>
                      <option value="technical">ტექნიკური მხარდაჭერა</option>
                      <option value="billing">გადახდები და ინვოისები</option>
                      <option value="partnership">პარტნიორობა</option>
                      <option value="feedback">მიმოხილვა და წინადადებები</option>
                      <option value="other">სხვა</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageCircle className="w-4 h-4 inline mr-2" />
                      შეტყობინება *
                    </label>
                    <textarea
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="დაწერეთ თქვენი შეტყობინება აქ..."
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      მსურველობა მქონდა მივიღო FlexFit-ის სიახლეები და სპეციალური შეთავაზებები
                    </label>
                  </div>

                  <Button type="submit" className="w-full py-3 text-lg" size="lg">
                    <Send className="w-5 h-5 mr-2" />
                    გაგზავნა
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ხშირად დასმული კითხვები
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              იპოვეთ პასუხები ყველაზე ხშირად დასმულ კითხვებზე
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">როგორ შემიძლია დავიწყო FlexFit-ის გამოყენება?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  FlexFit-ის გამოყენების დასაწყებად, უბრალოდ დარეგისტრირდით ჩვენს ვებსაიტზე, 
                  აირჩიეთ თქვენთვის შესაფერისი გეგმა და დაიწყეთ ფიტნესის ცენტრების მონახულება.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">რა ფიტნესის ცენტრებია ხელმისაწვდომი?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ჩვენ გვაქვს 130+ ლოკაცია საქართველოში, მათ შორის ფიტნეს ცენტრები, 
                  საცურაო აუზები, იოგა სტუდიები და სხვა სპორტული ობიექტები.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">როგორ მუშაობს გადახდის სისტემა?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  FlexFit იყენებს კრედიტების სისტემას. თქვენ იღებთ ყოველთვიურ აბონემენტს, 
                  რომელიც მოგცემთ გარკვეული რაოდენობის კრედიტს, რომლებსაც შეგიძლიათ 
                  გამოიყენოთ ნებისმიერ ფიტნესის ცენტრში.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">რა მოხდება თუ მჭირდება ტექნიკური მხარდაჭერა?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ჩვენი ტექნიკური მხარდაჭერის გუნდი ხელმისაწვდომია 24/7. 
                  დაგვიკავშირდით ტელეფონით, ელ-ფოსტით ან ჩვენი ვებსაიტის ჩატის მეშვეობით.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              გამოგვყევით სოციალურ ქსელებში
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              დარჩით განახლებული ჩვენი უახლესი სიახლეებით, სპეციალური შეთავაზებებით და ფიტნესის რჩევებით
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <a href="#" className="group">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                    <Facebook className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Facebook</h3>
                  <p className="text-gray-600">დაგვიკავშირდით Facebook-ზე</p>
                </CardContent>
              </Card>
            </a>

            <a href="#" className="group">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
                    <Twitter className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Twitter</h3>
                  <p className="text-gray-600">გამოგვყევით Twitter-ზე</p>
                </CardContent>
              </Card>
            </a>

            <a href="#" className="group">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-700 transition-colors">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
                  <p className="text-gray-600">დაგვიკავშირდით Instagram-ზე</p>
                </CardContent>
              </Card>
            </a>

            <a href="#" className="group">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">LinkedIn</h3>
                  <p className="text-gray-600">დაგვიკავშირდით LinkedIn-ზე</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>


    </div>
  )
}
