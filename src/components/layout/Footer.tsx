import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-3"></div>
              <span className="text-xl font-bold">FlexFit</span>
            </div>
            <p className="text-gray-400 mb-4">
              ერთი აბონემენტი, უსაზღვრო აქტივობები. FlexFit-თან ერთად ისარგებლეთ 
              საუკეთესო ფიტნესის ცენტრებით საქართველოში.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">სწრაფი ბმულები</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">მთავარი</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">ჩვენს შესახებ</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">სერვისები</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">კონტაქტი</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">სერვისები</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">ფიტნეს ცენტრები</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">საცურაო აუზები</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">იოგა სტუდიები</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">ჯგუფური გაკვეთილები</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">კონტაქტი</h4>
            <div className="space-y-2 text-gray-400">
              <p>თბილისი, საქართველო</p>
              <p>+995 555 123 456</p>
              <p>info@flexfit.ge</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FlexFit. ყველა უფლება დაცულია.</p>
        </div>
      </div>
    </footer>
  )
}
