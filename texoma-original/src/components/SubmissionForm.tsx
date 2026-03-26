import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function SubmissionForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPhotoPrompt, setShowPhotoPrompt] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', city: '',
    year: '2010', make: '', model: '', mileage: '', condition: 'Running', hasTitle: 'Yes',
    notes: '', smsOptIn: true,
  });

  const updateForm = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone is required';
    if (!formData.city.trim()) errs.city = 'City / ZIP is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.make.trim()) errs.make = 'Make is required';
    if (!formData.model.trim()) errs.model = 'Model is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep(s => Math.min(3, s + 1));
  };

  const prevStep = () => {
    setErrors({});
    setStep(s => Math.max(1, s - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.make.trim() || !formData.model.trim()) {
      alert('Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send(
        'service_bhxjcew',
        'template_24jk0mu',
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'Not provided',
          city: formData.city,
          year: formData.year,
          make: formData.make,
          model: formData.model,
          mileage: formData.mileage || 'Not provided',
          condition: formData.condition,
          hasTitle: formData.hasTitle,
          notes: formData.notes || 'None',
          smsOptIn: formData.smsOptIn ? 'Yes' : 'No',
          photos: 'Customer will send via WhatsApp if available',
          to_email: 'rubenlopezceo@gmail.com',
        },
        'V6x15a1epkwSvV8iy'
      );
      setIsSuccess(true);
      setShowPhotoPrompt(true);
    } catch (error) {
      console.error('Submission failed', error);
      alert('Something went wrong. Please call us at (903) 267-6976.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Ruben! I just submitted my vehicle for a cash offer.\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `City: ${formData.city}\n` +
      `Vehicle: ${formData.year} ${formData.make} ${formData.model}\n` +
      `Mileage: ${formData.mileage || 'N/A'}\n` +
      `Condition: ${formData.condition}\n` +
      `Has Title: ${formData.hasTitle}\n` +
      `Notes: ${formData.notes || 'None'}\n\n` +
      `Here are my vehicle photos:`
    );
    window.open(`https://wa.me/19032676976?text=${msg}`, '_blank');
  };

  const years = Array.from({ length: 46 }, (_, i) => (2025 - i).toString());

  const inputClass = (field: string) =>
    `w-full bg-[#FDF2F2] border-4 ${errors[field] ? 'border-[#EF4444]' : 'border-[#111]'} rounded-lg px-4 py-3 text-[#111] font-bold focus:outline-none focus:bg-[#22D3EE] transition-colors shadow-funky-sm`;

  return (
    <section id="submit" className="py-24 bg-[#FBBF24] relative border-y-4 border-[#111]">
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#111 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-6xl md:text-8xl text-white mb-4 tracking-wider text-stroke drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] transform rotate-1">
            WHAT'S YOUR <span className="text-[#EF4444]">VEHICLE WORTH?</span>
          </h2>
          <p className="font-body text-2xl text-[#111] font-black bg-white inline-block px-6 py-2 border-4 border-[#111] shadow-funky-sm transform -rotate-1">
            Fill this out in 90 seconds. No spam. No pressure. Just a real offer.
          </p>
        </div>

        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border-4 border-[#111] rounded-2xl p-10 text-center shadow-funky"
          >
            <div className="w-24 h-24 bg-[#22D3EE] border-4 border-[#111] rounded-full flex items-center justify-center mx-auto mb-6 shadow-funky-sm transform -rotate-6">
              <CheckCircle2 className="w-12 h-12 text-[#111]" />
            </div>
            <h3 className="font-display text-6xl text-[#111] mb-4">You're in!</h3>
            <p className="font-body text-2xl text-[#111] mb-8 font-bold">
              We'll review your {formData.year} {formData.make} and reach out within a few hours.
            </p>

            {showPhotoPrompt && (
              <div className="bg-[#FDF2F2] border-4 border-[#111] p-8 rounded-xl max-w-lg mx-auto shadow-funky-sm">
                <p className="font-display text-2xl text-[#111] uppercase tracking-wider mb-6">Do you have photos of your vehicle?</p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={openWhatsApp}
                    className="flex items-center gap-2 px-8 py-4 bg-[#25D366] border-4 border-[#111] text-white font-display text-2xl uppercase tracking-wider shadow-funky-sm hover:scale-105 transition-transform"
                  >
                    YES — Send Photos
                  </button>
                  <button
                    onClick={() => setShowPhotoPrompt(false)}
                    className="flex items-center gap-2 px-8 py-4 bg-white border-4 border-[#111] text-[#111] font-display text-2xl uppercase tracking-wider shadow-funky-sm hover:bg-[#FBBF24] transition-colors"
                  >
                    NO
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <div className="bg-white border-4 border-[#111] rounded-2xl p-6 md:p-10 shadow-funky relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-[#FDF2F2] border-b-4 border-[#111]">
              <motion.div
                className="h-full bg-[#EF4444] border-r-4 border-[#111]"
                initial={{ width: "33%" }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="flex justify-between items-center mb-8 mt-4 font-display text-2xl text-[#111] uppercase tracking-widest">
              <span className={step >= 1 ? "text-[#EF4444] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" : "opacity-50"}>01. Info</span>
              <span className={step >= 2 ? "text-[#EF4444] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" : "opacity-50"}>02. Vehicle</span>
              <span className={step >= 3 ? "text-[#EF4444] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" : "opacity-50"}>03. Notes</span>
            </div>

            <form onSubmit={handleSubmit} className="relative" data-netlify="true" name="vehicle-submission">
              <input type="hidden" name="form-name" value="vehicle-submission" />
              <AnimatePresence mode="wait">

                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} className="space-y-6">
                    <h3 className="font-display text-4xl text-[#111] mb-6">Your Info</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-display text-xl text-[#111] uppercase tracking-wider">Full Name *</label>
                        <input type="text" value={formData.name} onChange={e => updateForm('name', e.target.value)} className={inputClass('name')} placeholder="John Doe" />
                        {errors.name && <p className="text-[#EF4444] font-bold text-sm">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="font-display text-xl text-[#111] uppercase tracking-wider">Phone Number *</label>
                        <input type="tel" value={formData.phone} onChange={e => updateForm('phone', e.target.value)} className={inputClass('phone')} placeholder="(903) 555-0123" />
                        {errors.phone && <p className="text-[#EF4444] font-bold text-sm">{errors.phone}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="font-display text-xl text-[#111] uppercase tracking-wider">Email (Optional)</label>
                        <input type="email" value={formData.email} onChange={e => updateForm('email', e.target.value)} className={inputClass('email')} placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="font-display text-xl text-[#111] uppercase tracking-wider">City / ZIP *</label>
                        <input type="text" value={formData.city} onChange={e => updateForm('city', e.target.value)} className={inputClass('city')} placeholder="Sherman, TX 75090" />
                        {errors.city && <p className="text-[#EF4444] font-bold text-sm">{errors.city}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} className="space-y-6">
                    <h3 className="font-display text-4xl text-[#111] mb-6">Your Vehicle</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-display text-xl text-[#111] uppercase tracking-wider">Year *</label>
                        <select value={formData.year} onChange={e => updateForm('year', e.target.value)} className={inputClass('year') + ' appearance-none'}>
                          {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="font-display text-xl text-[#111] uppercase tracking-wider">Make *</label>
                        <input type="text" value={formData.make} onChange={e => updateForm('make', e.target.value)} className={inputClass('make')} placeholder="e.g. Ford" />
                        {errors.make && <p className="text-[#EF4444] font-bold text-sm">{errors.make}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="font-display text-xl text-[#111] uppercase tracking-wider">Model *</label>
                        <input type="text" value={formData.model} onChange={e => updateForm('model', e.target.value)} className={inputClass('model')} placeholder="e.g. F-150" />
                        {errors.model && <p className="text-[#EF4444] font-bold text-sm">{errors.model}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="font-display text-xl text-[#111] uppercase tracking-wider">Mileage</label>
                        <input type="text" value={formData.mileage} onChange={e => updateForm('mileage', e.target.value)} className={inputClass('mileage')} placeholder="e.g. 150,000" />
                      </div>
                      <div className="space-y-2">
                        <label className="font-display text-xl text-[#111] uppercase tracking-wider">Condition *</label>
                        <select value={formData.condition} onChange={e => updateForm('condition', e.target.value)} className={inputClass('condition') + ' appearance-none'}>
                          <option>Running</option>
                          <option>Not Running</option>
                          <option>Wrecked</option>
                          <option>Missing Parts</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="font-display text-xl text-[#111] uppercase tracking-wider">Has Title? *</label>
                        <select value={formData.hasTitle} onChange={e => updateForm('hasTitle', e.target.value)} className={inputClass('hasTitle') + ' appearance-none'}>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} className="space-y-6">
                    <h3 className="font-display text-4xl text-[#111] mb-6">Additional Notes</h3>
                    <div className="space-y-2">
                      <label className="font-display text-xl text-[#111] uppercase tracking-wider">Anything else we should know?</label>
                      <textarea value={formData.notes} onChange={e => updateForm('notes', e.target.value)} rows={5} className="w-full bg-[#FDF2F2] border-4 border-[#111] rounded-lg px-4 py-3 text-[#111] font-bold focus:outline-none focus:bg-[#22D3EE] transition-colors resize-none shadow-funky-sm" placeholder="Tell us anything else about the vehicle..."></textarea>
                    </div>
                    <label className="flex items-center gap-4 cursor-pointer group mt-4">
                      <div className="relative flex items-center justify-center w-8 h-8 border-4 border-[#111] rounded bg-white group-hover:bg-[#22D3EE] transition-colors">
                        <input type="checkbox" checked={formData.smsOptIn} onChange={e => updateForm('smsOptIn', e.target.checked)} className="opacity-0 absolute inset-0 cursor-pointer" />
                        {formData.smsOptIn && <CheckCircle2 className="w-6 h-6 text-[#111]" />}
                      </div>
                      <span className="font-body text-[#111] select-none font-bold text-lg">Text me my offer when it's ready</span>
                    </label>
                  </motion.div>
                )}

              </AnimatePresence>
            </form>

            <div className="flex justify-between pt-8 border-t-4 border-[#111] mt-8">
              {step > 1 ? (
                <button type="button" onClick={prevStep} className="flex items-center gap-2 px-6 py-3 bg-white border-4 border-[#111] text-[#111] hover:bg-[#FBBF24] transition-colors font-display text-2xl uppercase tracking-wider shadow-funky shadow-funky-hover">
                  <ArrowLeft className="w-6 h-6" /> Back
                </button>
              ) : <div></div>}
              {step < 3 ? (
                <button type="button" onClick={nextStep} className="flex items-center gap-2 px-8 py-3 bg-[#22D3EE] border-4 border-[#111] text-[#111] hover:bg-[#FBBF24] transition-colors font-display text-2xl uppercase tracking-wider shadow-funky shadow-funky-hover">
                  Next <ArrowRight className="w-6 h-6" />
                </button>
              ) : (
                <button type="button" onClick={handleSubmit as any} disabled={isSubmitting} className="flex items-center gap-2 px-8 py-3 bg-[#EF4444] border-4 border-[#111] text-white hover:bg-[#FBBF24] hover:text-[#111] transition-colors font-display text-2xl uppercase tracking-wider shadow-funky shadow-funky-hover disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Submitting..." : "SUBMIT FOR ESTIMATE →"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
