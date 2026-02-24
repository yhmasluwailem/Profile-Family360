import {
  CalendarDays,
  MessageCircle,
  Wallet,
  Trophy,
  Edit,
  Mail,
  FileDown,
  Archive,
  ArrowRight,
  Settings,
  Info,
  Home,
  Briefcase,
  GraduationCap,
  Building2,
  TreePine,
  BarChart3,
} from 'lucide-react'
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

const attendanceData = [
  { month: 'يناير', value: 1 },
  { month: 'فبر', value: 0 },
  { month: 'مارس', value: 2 },
  { month: 'أبريل', value: 1 },
  { month: 'مايو', value: 0 },
  { month: 'يونيو', value: 2 },
  { month: 'يوليو', value: 2 },
  { month: 'أغسطس', value: 1 },
  { month: 'سبتمبر', value: 0 },
  { month: 'أكتوبر', value: 1 },
  { month: 'نوفمبر', value: 2 },
  { month: 'ديسمبر', value: 0 },
]

function StatCard({ icon, value, label, trend, trendUp }: {
  icon: React.ReactNode
  value: string
  label: string
  trend: string
  trendUp: boolean
}) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs text-muted-foreground mb-1">{label}</p>
            <p className="text-2xl font-bold tracking-tight leading-none">{value}</p>
          </div>
          <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center text-muted-foreground">
            {icon}
          </div>
        </div>
        <Separator className="mb-2" />
        <p className={cn('text-xs font-medium', trendUp ? 'text-green-600' : 'text-red-500')}>
          {trend}
        </p>
      </CardContent>
    </Card>
  )
}

function KVItem({ label, value, valueClass }: { label: string; value: string; valueClass?: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
      <p className={cn('text-sm font-medium', valueClass)}>{value}</p>
    </div>
  )
}

function TimelineItem({ icon, title, desc, tags, time, isLast }: {
  icon: React.ReactNode
  title: string
  desc: string
  tags: { label: string; variant: 'info' | 'success' | 'warning' | 'purple' }[]
  time: string
  isLast?: boolean
}) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="h-2 w-2 rounded-full bg-foreground mt-1.5 shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-border mt-1" />}
      </div>
      <div className={cn('flex-1', !isLast && 'pb-6')}>
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-secondary flex items-center justify-center text-muted-foreground">
              {icon}
            </div>
            <p className="text-sm font-semibold">{title}</p>
          </div>
          <span className="text-xs text-muted-foreground whitespace-nowrap">{time}</span>
        </div>
        <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{desc}</p>
        <div className="flex gap-1.5 flex-wrap">
          {tags.map(t => <Badge key={t.label} variant={t.variant} className="text-xs">{t.label}</Badge>)}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-muted p-4" dir="rtl">

      {/* Topbar */}
      <Card className="mb-4">
        <CardContent className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-md bg-foreground text-background flex items-center justify-center text-xs font-bold">ك</div>
              <span className="font-bold text-sm">كفاح</span>
              <span className="text-muted-foreground text-xs">/</span>
              <nav className="flex items-center gap-1 text-xs text-muted-foreground">
                <a href="#" className="text-foreground font-medium hover:underline">الأعضاء</a>
                <span>/</span>
                <span>عبدالرحمن السويلم</span>
              </nav>
            </div>
            <div className="flex items-center gap-1.5">
              <Button variant="outline" size="sm" className="gap-1.5">
                <ArrowRight size={13} />
                رجوع
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Settings size={15} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Card */}
      <Card className="overflow-hidden">

        {/* Profile Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-start gap-4 mb-5">
            <div className="relative shrink-0">
              <Avatar className="h-16 w-16 bg-gradient-to-br from-blue-500 to-violet-600">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-violet-600 text-white text-xl font-bold">
                  عخ
                </AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0.5 left-0.5 h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-background" />
            </div>

            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-bold tracking-tight mb-1">عبدالرحمن خالد السويلم</h2>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 flex-wrap">
                <span className="flex items-center gap-1">👤 KF-2847</span>
                <Separator orientation="vertical" className="h-3" />
                <span className="flex items-center gap-1">📍 الرياض</span>
                <Separator orientation="vertical" className="h-3" />
                <span className="flex items-center gap-1">🎂 1985/03/14</span>
              </div>
              <div className="flex gap-1.5 flex-wrap">
                <Badge variant="secondary" className="text-xs">🌿 عضو فاعل</Badge>
                <Badge variant="secondary" className="text-xs">⭐ مجلس الأسرة</Badge>
                <Badge variant="secondary" className="text-xs">🏆 الجيل الثالث</Badge>
              </div>
            </div>

            <div className="flex gap-2 shrink-0">
              <Button variant="outline" size="sm"><Mail size={13} className="ml-1" />رسالة</Button>
              <Button size="sm"><Edit size={13} className="ml-1" />تعديل</Button>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 divide-x divide-x-reverse divide-border border border-border rounded-lg overflow-hidden">
            {[
              { label: 'فعاليات', value: '12', trend: '▲ 3 هذا العام', up: true },
              { label: 'استشارات', value: '7', trend: '▲ 2 هذا الشهر', up: true },
              { label: 'الرصيد (ريال)', value: '4,200', trend: '▲ 600 هذا الشهر', up: true },
              { label: 'نسبة الحضور', value: '92%', trend: '▼ 3% آخر ربع', up: false },
            ].map((s) => (
              <div key={s.label} className="p-3 text-center">
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground mb-1 font-medium">{s.label}</p>
                <p className="text-xl font-bold tracking-tight leading-none mb-1">{s.value}</p>
                <p className={cn('text-[10px] font-medium', s.up ? 'text-green-600' : 'text-red-500')}>{s.trend}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview">
          <div className="px-4 pt-3 pb-0">
            <TabsList className="gap-1">
              <TabsTrigger value="overview" className="gap-1.5 text-xs">
                <BarChart3 size={13} /> نظرة عامة
              </TabsTrigger>
              <TabsTrigger value="events" className="gap-1.5 text-xs">
                <CalendarDays size={13} /> الفعاليات
                <Badge variant="info" className="h-4 px-1.5 text-[10px]">12</Badge>
              </TabsTrigger>
              <TabsTrigger value="consulting" className="gap-1.5 text-xs">
                <MessageCircle size={13} /> الاستشارات
                <Badge variant="success" className="h-4 px-1.5 text-[10px]">7</Badge>
              </TabsTrigger>
              <TabsTrigger value="finance" className="gap-1.5 text-xs">
                <Wallet size={13} /> المحفظة
              </TabsTrigger>
              <TabsTrigger value="family" className="gap-1.5 text-xs">
                <TreePine size={13} /> الشجرة
              </TabsTrigger>
            </TabsList>
          </div>

          {/* ── Overview ── */}
          <TabsContent value="overview">
            <div className="p-4 space-y-4">
              <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-sm">
                <Info size={15} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-xs">ملف مكتمل بنسبة 87%</p>
                  <p className="text-xs text-blue-600 mt-0.5">يرجى إضافة صورة شخصية ورقم الهاتف للوصول إلى المستوى الذهبي.</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                <StatCard icon={<CalendarDays size={15} />} value="12" label="فعالية حضرها" trend="▲ 3 هذا العام" trendUp />
                <StatCard icon={<MessageCircle size={15} />} value="7" label="استشارة مقدّمة" trend="▲ 2 هذا الشهر" trendUp />
                <StatCard icon={<Wallet size={15} />} value="4,200" label="ريال رصيد" trend="▲ 600 هذا الشهر" trendUp />
                <StatCard icon={<Trophy size={15} />} value="840" label="نقطة ولاء" trend="▼ 60 آخر شهر" trendUp={false} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-semibold">معلومات شخصية</p>
                      <Button variant="ghost" size="sm" className="h-7 text-xs gap-1"><Edit size={11} />تعديل</Button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <KVItem label="الاسم الكامل" value="عبدالرحمن خالد السويلم" />
                      <KVItem label="رقم الهوية" value="1084xxxxxxx" />
                      <KVItem label="الجوال" value="+966 5xx xxx xxx" />
                      <KVItem label="الإيميل" value="a.suwailem@email.com" />
                      <KVItem label="المهنة" value="مهندس برمجيات" />
                      <KVItem label="تاريخ الانضمام" value="2019/06/01" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-semibold">مستوى المشاركة</p>
                      <Badge variant="info" className="text-xs">72% إجمالي</Badge>
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: 'الهدف السنوي', value: 72, display: '72%', cls: '' },
                        { label: 'حضور الفعاليات', value: 85, display: '85%', cls: '[&>div]:bg-green-500' },
                        { label: 'الاستشارات', value: 70, display: '70%', cls: '[&>div]:bg-amber-500' },
                        { label: 'اشتراكات مدفوعة', value: 91, display: '11/12', cls: '[&>div]:bg-violet-500' },
                      ].map(p => (
                        <div key={p.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="font-medium">{p.label}</span>
                            <span className="text-muted-foreground">{p.display}</span>
                          </div>
                          <Progress value={p.value} className={cn('h-1.5', p.cls)} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* ── Events ── */}
          <TabsContent value="events">
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-semibold">نشاط الحضور — 2024</p>
                      <Badge variant="secondary" className="text-xs">سنوي</Badge>
                    </div>
                    <ResponsiveContainer width="100%" height={100}>
                      <BarChart data={attendanceData} barSize={16}>
                        <XAxis dataKey="month" tick={{ fontSize: 9, fill: '#94a3b8' }} tickLine={false} axisLine={false} />
                        <Bar dataKey="value" radius={[3, 3, 0, 0]}>
                          {attendanceData.map((entry, i) => (
                            <Cell key={i} fill={entry.value > 0 ? 'hsl(224 71.4% 4.1%)' : 'hsl(220 14.3% 88%)'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm font-semibold mb-4">توزيع الفعاليات</p>
                    <div className="space-y-3">
                      {[
                        { label: 'اجتماعية', value: 42, count: 5, variant: 'info' as const, cls: '[&>div]:bg-blue-500' },
                        { label: 'تعليمية', value: 33, count: 4, variant: 'success' as const, cls: '[&>div]:bg-green-500' },
                        { label: 'رياضية', value: 17, count: 2, variant: 'warning' as const, cls: '[&>div]:bg-amber-500' },
                        { label: 'ثقافية', value: 8, count: 1, variant: 'purple' as const, cls: '[&>div]:bg-purple-500' },
                      ].map(d => (
                        <div key={d.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="font-medium">{d.label}</span>
                            <Badge variant={d.variant} className="text-[10px] h-4 px-1.5">{d.count}</Badge>
                          </div>
                          <Progress value={d.value} className={cn('h-1.5', d.cls)} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-right p-3 text-xs font-medium text-muted-foreground">الفعالية</th>
                        <th className="text-right p-3 text-xs font-medium text-muted-foreground">النوع</th>
                        <th className="text-right p-3 text-xs font-medium text-muted-foreground">التاريخ</th>
                        <th className="text-right p-3 text-xs font-medium text-muted-foreground">الحالة</th>
                        <th className="text-right p-3 text-xs font-medium text-muted-foreground">نقاط</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'ملتقى الأسرة السنوي 2024', sub: 'الرياض — قاعة النخبة', type: 'اجتماعية', typeV: 'info' as const, date: '2024/11/15', status: 'حضر', statusV: 'success' as const, pts: '+50', ptsC: 'text-green-600' },
                        { name: 'ورشة التخطيط المالي', sub: 'أونلاين — Zoom', type: 'تعليمية', typeV: 'success' as const, date: '2024/10/08', status: 'حضر', statusV: 'success' as const, pts: '+35', ptsC: 'text-green-600' },
                        { name: 'بطولة الكرة العائلية', sub: 'الدمام — ملعب الأسرة', type: 'رياضية', typeV: 'warning' as const, date: '2024/09/20', status: 'تأخر', statusV: 'warning' as const, pts: '+20', ptsC: 'text-amber-600' },
                        { name: 'محاضرة التراث العائلي', sub: 'جدة — دار الثقافة', type: 'ثقافية', typeV: 'purple' as const, date: '2024/08/05', status: 'غائب', statusV: 'destructive' as const, pts: '—', ptsC: 'text-muted-foreground' },
                      ].map(row => (
                        <tr key={row.name} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                          <td className="p-3">
                            <p className="font-semibold text-xs">{row.name}</p>
                            <p className="text-xs text-muted-foreground">{row.sub}</p>
                          </td>
                          <td className="p-3"><Badge variant={row.typeV} className="text-[10px]">{row.type}</Badge></td>
                          <td className="p-3 text-xs text-muted-foreground">{row.date}</td>
                          <td className="p-3"><Badge variant={row.statusV} className="text-[10px]">{row.status}</Badge></td>
                          <td className={cn('p-3 text-xs font-bold', row.ptsC)}>{row.pts}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* ── Consulting ── */}
          <TabsContent value="consulting">
            <div className="p-4">
              <TimelineItem
                icon={<Briefcase size={12} />}
                title="استشارة تقنية — تطوير تطبيق الأسرة"
                desc="قدّم توصيات بشأن اختيار Stack التقني المناسب. اقترح React Native مع Django backend."
                tags={[{ label: 'تقنية', variant: 'info' }, { label: 'مقبولة', variant: 'success' }]}
                time="منذ 3 أيام"
              />
              <TimelineItem
                icon={<Building2 size={12} />}
                title="استشارة قانونية — تسجيل الصندوق العائلي"
                desc="مراجعة الوثائق القانونية المتعلقة بتأسيس صندوق الأسرة وتقديم المشورة حول الهيكل الأمثل."
                tags={[{ label: 'قانونية', variant: 'success' }, { label: 'قيد المراجعة', variant: 'warning' }]}
                time="منذ أسبوعين"
              />
              <TimelineItem
                icon={<Home size={12} />}
                title="استشارة عقارية — مشروع السكن العائلي"
                desc="دراسة الجدوى الاقتصادية لمشروع توفير الوحدات السكنية للأعضاء بأسعار مدعومة."
                tags={[{ label: 'عقارية', variant: 'warning' }, { label: 'مكتملة', variant: 'success' }]}
                time="منذ شهر"
              />
              <TimelineItem
                icon={<GraduationCap size={12} />}
                title="استشارة تعليمية — منح الدراسة للأبناء"
                desc="توجيه أبناء الأسرة نحو برامج المنح والابتعاث في الجامعات العالمية."
                tags={[{ label: 'تعليمية', variant: 'purple' }, { label: 'مكتملة', variant: 'success' }]}
                time="منذ 3 أشهر"
                isLast
              />
            </div>
          </TabsContent>

          {/* ── Finance ── */}
          <TabsContent value="finance">
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg p-5 bg-foreground text-background relative overflow-hidden">
                  <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-background/5" />
                  <p className="text-xs uppercase tracking-widest opacity-50 mb-2 font-medium">إجمالي الرصيد</p>
                  <p className="text-4xl font-extrabold tracking-tighter leading-none mb-1">4,200</p>
                  <p className="text-sm opacity-50">ريال سعودي</p>
                  <p className="text-xs opacity-30 mt-6">آخر تحديث: 2024/11/20</p>
                </div>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm font-semibold mb-3">ملخص مالي</p>
                    <div className="grid grid-cols-2 gap-3">
                      <KVItem label="إجمالي المدفوع" value="8,400 ريال" valueClass="text-green-600" />
                      <KVItem label="اشتراك سنوي" value="1,200 ريال" />
                      <KVItem label="المكافآت" value="350 ريال" valueClass="text-purple-600" />
                      <div>
                        <p className="text-xs text-muted-foreground mb-0.5">الحالة</p>
                        <Badge variant="success" className="text-xs">محدّث ✓</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-right p-3 text-xs font-medium text-muted-foreground">البيان</th>
                        <th className="text-right p-3 text-xs font-medium text-muted-foreground">التاريخ</th>
                        <th className="text-right p-3 text-xs font-medium text-muted-foreground">النوع</th>
                        <th className="text-right p-3 text-xs font-medium text-muted-foreground">المبلغ</th>
                        <th className="text-right p-3 text-xs font-medium text-muted-foreground">الرصيد</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { desc: 'اشتراك شهر نوفمبر 2024', date: '2024/11/01', type: 'دفع', typeV: 'success' as const, amt: '+600', amtC: 'text-green-600', bal: '4,200' },
                        { desc: 'رسوم فعالية الملتقى السنوي', date: '2024/11/10', type: 'خصم', typeV: 'destructive' as const, amt: '-150', amtC: 'text-red-500', bal: '3,600' },
                        { desc: 'مكافأة تقديم استشارة', date: '2024/11/18', type: 'مكافأة', typeV: 'purple' as const, amt: '+100', amtC: 'text-purple-600', bal: '3,700' },
                        { desc: 'اشتراك شهر أكتوبر 2024', date: '2024/10/01', type: 'دفع', typeV: 'success' as const, amt: '+600', amtC: 'text-green-600', bal: '3,600' },
                      ].map(row => (
                        <tr key={row.desc} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                          <td className="p-3 text-xs font-medium">{row.desc}</td>
                          <td className="p-3 text-xs text-muted-foreground">{row.date}</td>
                          <td className="p-3"><Badge variant={row.typeV} className="text-[10px]">{row.type}</Badge></td>
                          <td className={cn('p-3 text-xs font-bold', row.amtC)}>{row.amt}</td>
                          <td className="p-3 text-xs font-semibold">{row.bal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* ── Family ── */}
          <TabsContent value="family">
            <div className="p-4 space-y-4">
              <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm">
                <TreePine size={15} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-xs">شجرة الأسرة التفاعلية</p>
                  <p className="text-xs text-amber-700 mt-0.5">ينتمي إلى الفرع الرئيسي — سويلم بن محمد. الجيل الثالث من 7 أجيال مسجلة.</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { emoji: '👴', name: 'خالد السويلم', role: 'الأب — الجيل الثاني', badge: 'عضو فاعل', badgeV: 'success' as const, highlight: false },
                  { emoji: '👤', name: 'عبدالرحمن خالد', role: 'الجيل الثالث', badge: 'أنت', badgeV: 'default' as const, highlight: true },
                  { emoji: '👶', name: 'محمد عبدالرحمن', role: 'الابن — الجيل الرابع', badge: 'منتسب', badgeV: 'warning' as const, highlight: false },
                ].map(m => (
                  <Card key={m.name} className={m.highlight ? 'border-foreground/30 bg-foreground/[0.02]' : ''}>
                    <CardContent className="p-4 text-center">
                      <div className="text-4xl mb-2">{m.emoji}</div>
                      <p className={cn('text-sm font-bold mb-1', m.highlight && 'text-foreground')}>{m.name}</p>
                      <p className="text-xs text-muted-foreground mb-3">{m.role}</p>
                      <Badge variant={m.badgeV} className="text-xs">{m.badge}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardContent className="p-4">
                  <p className="text-sm font-semibold mb-4">إحصاء الفرع</p>
                  <div className="grid grid-cols-4 divide-x divide-x-reverse divide-border">
                    {[
                      { v: '7', l: 'أجيال' },
                      { v: '142', l: 'عضو في الفرع' },
                      { v: '38', l: 'من الجيل الثالث' },
                      { v: '5', l: 'أبناء مباشرون' },
                    ].map(s => (
                      <div key={s.l} className="text-center py-2">
                        <p className="text-2xl font-extrabold tracking-tight leading-none mb-1">{s.v}</p>
                        <p className="text-xs text-muted-foreground">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="flex items-center gap-2 p-4 border-t border-border bg-muted/30 flex-wrap">
          <Button size="sm" className="gap-1.5"><Edit size={13} />تعديل العضو</Button>
          <Button variant="outline" size="sm" className="gap-1.5"><Mail size={13} />إرسال رسالة</Button>
          <Button variant="ghost" size="sm" className="gap-1.5"><FileDown size={13} />تصدير PDF</Button>
          <div className="flex-1" />
          <span className="text-xs text-muted-foreground">آخر تعديل: 2024/11/20 — بواسطة المدير</span>
          <Button variant="destructive" size="sm" className="gap-1.5"><Archive size={13} />أرشفة</Button>
        </div>
      </Card>

      <p className="text-center text-xs text-muted-foreground mt-4">
        مبني بـ <strong className="text-foreground">Shadcn/ui</strong> + Tailwind CSS · نظام كفاح لإدارة أسرة سويلم
      </p>
    </div>
  )
}
