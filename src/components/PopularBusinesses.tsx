import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Facebook, Instagram, MessageCircle, Bookmark, CheckCircle, Check, X, BadgeCheck, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { supabase } from '@/integrations/supabase/client';

interface Business {
  id: string;
  name: string;
  description: string;
  category: string;
  city: string;
  state: string;
  rating: number;
  image_url: string;
  website: string;
}

const PopularBusinesses = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState<string | null>(null);

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const fetchBusinesses = async () => {
    try {
      // Query businesses table with available fields only
      const { data, error } = await supabase
        .from('businesses')
        .select(`
          id,
          name,
          description,
          category,
          city,
          state,
          rating,
          image_url,
          website
        `)
        .order('created_at', { ascending: false })
        .limit(6);
        
      if (error) {
        console.error('Error fetching businesses:', error);
        return;
      }
      
      setBusinesses(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };


  const getOptionColors = (index: number) => {
    const colors = [
      'border-green-600 text-green-600',
      'border-blue-600 text-blue-600', 
      'border-purple-600 text-purple-600',
      'border-orange-600 text-orange-600',
      'border-pink-600 text-pink-600',
      'border-indigo-600 text-indigo-600',
      'border-teal-600 text-teal-600',
      'border-red-600 text-red-600'
    ];
    return colors[index % colors.length];
  };

  const isLicenseValid = (licenseDate?: string | null) => {
    if (!licenseDate) return false;
    
    const expiryDate = new Date(licenseDate);
    const currentDate = new Date();
    
    // Set both dates to start of day for accurate date comparison
    expiryDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);
    
    return expiryDate >= currentDate;
  };

  const parseProductsCatalog = (catalogString?: string | null) => {
    console.log('Raw products_catalog:', catalogString);
    if (!catalogString || catalogString.trim() === '') {
      console.log('No catalog string found or empty');
      return [];
    }
    
    // Try to parse as JSON first (in case it's stored as JSON array)
    try {
      const parsed = JSON.parse(catalogString);
      if (Array.isArray(parsed)) {
        console.log('Parsed as JSON array:', parsed);
        return parsed;
      }
    } catch (error) {
      // If JSON parsing fails, treat as comma-separated string
      console.log('JSON parsing failed, treating as comma-separated string');
    }
    
    // Parse as comma-separated string
    const products = catalogString
      .split(',')
      .map(item => item.trim())
      .filter(item => item.length > 0);
    
    console.log('Parsed as comma-separated string:', products);
    return products;
  };

  if (loading) {
    return (
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Popular Businesses</h2>
          <div className="flex justify-center">
            <div className="text-muted-foreground">Loading businesses...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Popular Businesses</h2>
        
        <div className="flex flex-wrap justify-center">
          {businesses.map((business) => (
            <Card key={business.id} className="group w-[320px] h-[455px] flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 mx-[5px] md:mx-[10px] mb-4">
              <div className="relative overflow-hidden rounded-t-lg">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={{
                    nextEl: `.swiper-button-next-${business.id}`,
                    prevEl: `.swiper-button-prev-${business.id}`,
                  }}
                  pagination={{ clickable: true }}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  className="w-[320px] h-[200px]"
                 >
                   <SwiperSlide>
                     <img
                       src={business.image_url || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=320&h=200&fit=crop"}
                       alt={`${business.name} business`}
                       className="w-full h-[200px] object-cover"
                     />
                   </SwiperSlide>
                </Swiper>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 px-1 py-2 h-auto w-6 bg-white/80 hover:bg-white z-20"
                >
                  <Bookmark className="w-3 h-5 text-gray-600" />
                </Button>
              </div>
              
              <CardContent className="flex-1 p-3 flex flex-col justify-between">
                <div className="space-y-2">
                   <div className="flex items-center justify-between">
                     <div className="text-sm text-muted-foreground">
                       Price on request
                     </div>
                    <div className="flex items-center gap-2">
                      <Facebook className="w-4 h-4 text-blue-600" />
                      <Instagram className="w-4 h-4 text-pink-600" />
                      <MessageCircle className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <img 
                        src={business.image_url || "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=40&h=40&fit=crop"} 
                        alt="Business logo" 
                        className="w-10 h-10 rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-foreground leading-tight line-clamp-2">
                        {business.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gray-500" />
                    {business.city}, {business.state}
                  </p>
                  
                </div>
                
                <div className="space-y-2 mt-2">
                  <Dialog open={openModal === business.id} onOpenChange={(open) => setOpenModal(open ? business.id : null)}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full h-8 text-xs bg-[#F5F8FA] hover:bg-[#E8EEF2] border-border"
                      >
                        See Products Catalog
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{business.name} - Products Catalog</DialogTitle>
                      </DialogHeader>
                       <div className="space-y-3">
                         <div className="text-center py-8 text-muted-foreground">
                           <p>No products catalog available</p>
                         </div>
                       </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    className="w-full h-8 text-xs flex items-center justify-center gap-1"
                    onClick={() => business.website && window.open(business.website, '_blank')}
                  >
                    Visit Website
                    <ChevronRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBusinesses;